/datum/tgui_module/teleport_control
	name = "Teleporter Control"
	tgui_id = "Teleporter"
	var/locked_name = "Not Locked"
	var/obj/item/locked = null
	var/obj/machinery/teleport/station/station = null
	var/obj/machinery/teleport/hub/hub = null

/datum/tgui_module/teleport_control/tgui_data(mob/user, datum/tgui/ui, datum/tgui_state/state)
	var/list/data = ..()

	data["locked_name"] = locked_name || "No Target"
	data["station_connected"] = !!station
	data["hub_connected"] = !!hub
	data["calibrated"] = hub?.accurate
	data["teleporter_on"] = station?.engaged

	return data

/datum/tgui_module/teleport_control/tgui_act(action, params, datum/tgui/ui, datum/tgui_state/state)
	if(..())
		return TRUE
	
	switch(action)
		if("select_target")
			var/list/L = list()
			var/list/areaindex = list()

<<<<<<< HEAD
			for(var/obj/item/device/radio/beacon/R in GLOB.all_beacons)
=======
			for(var/obj/item/device/radio/beacon/R in all_beacons)
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
				var/turf/T = get_turf(R)
				if(!T)
					continue
				if(!(T.z in using_map.player_levels))
					continue
				var/tmpname = T.loc.name
				if(areaindex[tmpname])
					tmpname = "[tmpname] ([++areaindex[tmpname]])"
				else
					areaindex[tmpname] = 1
				L[tmpname] = R

<<<<<<< HEAD
			for(var/obj/item/weapon/implant/tracking/I in GLOB.all_tracking_implants)
=======
			for(var/obj/item/weapon/implant/tracking/I in all_tracking_implants)
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
				if(!I.implanted || !ismob(I.loc))
					continue
				else
					var/mob/M = I.loc
					if(M.stat == 2)
						if(M.timeofdeath + 6000 < world.time)
							continue
					var/turf/T = get_turf(M)
					if(T)
						continue
					if(!(T in using_map.station_levels))
						continue
					var/tmpname = M.real_name
					if(areaindex[tmpname])
						tmpname = "[tmpname] ([++areaindex[tmpname]])"
					else
						areaindex[tmpname] = 1
					L[tmpname] = I

<<<<<<< HEAD
			var/desc = tgui_input_list(usr, "Please select a location to lock in.", "Locking Menu", L)
=======
			var/desc = input("Please select a location to lock in.", "Locking Menu") in L|null
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
			if(!desc)
				return FALSE
			if(tgui_status(usr, state) != STATUS_INTERACTIVE)
				return FALSE

			locked = L[desc]
			locked_name = desc
			return TRUE

		if("test_fire")
			station?.testfire()
			return TRUE

		if("toggle_on")
			if(!station)
				return FALSE
			
			if(station.engaged)
				station.disengage()
			else
				station.engage()
			
			return TRUE
