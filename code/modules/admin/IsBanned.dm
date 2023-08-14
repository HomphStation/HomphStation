#ifndef OVERRIDE_BAN_SYSTEM
//Blocks an attempt to connect before even creating our client datum thing.
/world/IsBanned(key,address,computer_id)
	if(ckey(key) in admin_datums)
		return ..()

	//Guest Checking
	if(!config.guests_allowed && IsGuestKey(key))
		log_adminwarn("Failed Login: [key] - Guests not allowed")
		message_admins("<font color='blue'>Failed Login: [key] - Guests not allowed</font>")
		return list("reason"="guest", "desc"="\nReason: Guests not allowed. Please sign in with a byond account.")

	//check if the IP address is a known TOR node
	if(config && config.ToRban && ToRban_isbanned(address))
		log_adminwarn("Failed Login: [src] - Banned: ToR")
		message_admins("<font color='blue'>Failed Login: [src] - Banned: ToR</font>")
		//ban their computer_id and ckey for posterity
		AddBan(ckey(key), computer_id, "Use of ToR", "Automated Ban", 0, 0)
		return list("reason"="Using ToR", "desc"="\nReason: The network you are using to connect has been banned.\nIf you believe this is a mistake, please request help at [config.banappeals]")


	if(config.ban_legacy_system)

		//Ban Checking
		. = CheckBan( ckey(key), computer_id, address )
		if(.)
			log_adminwarn("Failed Login: [key] [computer_id] [address] - Banned [.["reason"]]")
			message_admins("<font color='blue'>Failed Login: [key] id:[computer_id] ip:[address] - Banned [.["reason"]]</font>")
			return .

		return ..()	//default pager ban stuff

	else

		var/ckeytext = ckey(key)

		if(!establish_db_connection())
			error("Ban database connection failure. Key [ckeytext] not checked")
			log_misc("Ban database connection failure. Key [ckeytext] not checked")
			return

		var/failedcid = 1
		var/failedip = 1

		var/ipquery = ""
		var/cidquery = ""
		if(address)
			failedip = 0
			ipquery = " OR ip = '[sanitizeSQL(address)]' "

		if(computer_id)
			failedcid = 0
			if(isnum(text2num(computer_id)))
				cidquery = " OR computerid = '[computer_id]' "
			else
				log_misc("Key [ckeytext] cid not checked. Non-Numeric: [computer_id]")
				failedcid = 1

		var/DBQuery/query = SSdbcore.NewQuery("SELECT ckey, ip, computerid, a_ckey, reason, expiration_time, duration, bantime, bantype FROM erro_ban WHERE (ckey = :t_ckey [ipquery] [cidquery]) AND (bantype = 'PERMABAN'  OR (bantype = 'TEMPBAN' AND expiration_time > Now())) AND isnull(unbanned)", list("t_ckey" = ckeytext)) //CHOMPEdit TGSQL

		query.Execute()

		while(query.NextRow())
			var/pckey = query.item[1]
			//var/pip = query.item[2]
			//var/pcid = query.item[3]
			var/ackey = query.item[4]
			var/reason = query.item[5]
			var/expiration = query.item[6]
			var/duration = query.item[7]
			var/bantime = query.item[8]
			var/bantype = query.item[9]

			var/expires = ""
			if(text2num(duration) > 0)
				expires = " The ban is for [duration] minutes and expires on [expiration] (server time)."

			var/desc = "\nReason: You, or another user of this computer or connection ([pckey]) is banned from playing here. The ban reason is:\n[reason]\nThis ban was applied by [ackey] on [bantime], [expires]"
			qdel(query) //CHOMPEdit TGSQL
			return list("reason"="[bantype]", "desc"="[desc]")
		qdel(query) //CHOMPEdit TGSQL
		if (failedcid)
			message_admins("[key] has logged in with a blank computer id in the ban check.")
		if (failedip)
			message_admins("[key] has logged in with a blank ip in the ban check.")
		return ..()	//default pager ban stuff
#endif
