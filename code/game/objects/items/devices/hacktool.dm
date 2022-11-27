/obj/item/device/multitool/hacktool
	var/is_hacking = 0
	var/max_known_targets
<<<<<<< HEAD
=======
	var/hackspeed = 1
	var/max_level = 4		//what's the max door security_level we can handle?
	var/full_override = FALSE	//can we override door bolts too? defaults to false for event/safety reasons
>>>>>>> c28095b90b... Merge pull request #14148 from KillianKirilenko/kk-hacktool

	var/in_hack_mode = 0
	var/list/known_targets
	var/list/supported_types
	var/datum/tgui_state/default/must_hack/hack_state
<<<<<<< HEAD
=======
	
/obj/item/device/multitool/hacktool/override
	hackspeed = 0.75
	max_level = 5
	full_override = TRUE
>>>>>>> c28095b90b... Merge pull request #14148 from KillianKirilenko/kk-hacktool

/obj/item/device/multitool/hacktool/New()
	..()
	known_targets = list()
	max_known_targets = 5 + rand(1,3)
	supported_types = list(/obj/machinery/door/airlock)
	hack_state = new(src)

/obj/item/device/multitool/hacktool/Destroy()
	for(var/atom/target as anything in known_targets)
		target.unregister(OBSERVER_EVENT_DESTROY, src)
	known_targets.Cut()
	qdel(hack_state)
	hack_state = null
	return ..()

/obj/item/device/multitool/hacktool/attackby(var/obj/item/W, var/mob/user)
	if(W.is_screwdriver())
		in_hack_mode = !in_hack_mode
		playsound(src, W.usesound, 50, 1)
	else
		..()

/obj/item/device/multitool/hacktool/afterattack(atom/A, mob/user)
	sanity_check()

	if(!in_hack_mode)
		return ..()

	if(!attempt_hack(user, A))
		return 0

	// Note, if you ever want to expand supported_types, you must manually add the custom state argument to their tgui_interact
	A.tgui_interact(user, custom_state = hack_state)
	return 1

/obj/item/device/multitool/hacktool/proc/attempt_hack(var/mob/user, var/atom/target)
	if(is_hacking)
		to_chat(user, "<span class='warning'>You are already hacking!</span>")
		return 0
	if(!is_type_in_list(target, supported_types))
		to_chat(user, "\icon[src][bicon(src)] <span class='warning'>Unable to hack this target, invalid target type.</span>")
		return 0

	var/obj/machinery/door/airlock/D = target
	if(D.security_level > max_level)
		to_chat(user, "\icon[src][bicon(src)] <span class='warning'>Target's electronic security is too complex.</span>")
		return 0
		
	var/found = known_targets.Find(D)
	if(found)
		known_targets.Swap(1, found)	// Move the last hacked item first
		return 1
	to_chat(user, "<span class='notice'>You begin hacking \the [D]...</span>")
	is_hacking = 1
<<<<<<< HEAD
	// On average hackin takes ~30 seconds. Fairly small random span to avoid people simply aborting and trying again
	var/hack_result = do_after(user, (20 SECONDS + rand(0, 10 SECONDS) + rand(0, 10 SECONDS)))
=======
	// On average hackin takes ~15 seconds. Fairly small random span to avoid people simply aborting and trying again
	// Reduced hack duration to compensate for the reduced functionality, multiplied by door sec level
	var/hack_result = do_after(user, (((10 SECONDS + rand(0, 10 SECONDS) + rand(0, 10 SECONDS))*hackspeed)*D.security_level))
>>>>>>> c28095b90b... Merge pull request #14148 from KillianKirilenko/kk-hacktool
	is_hacking = 0

	if(hack_result && in_hack_mode)
		to_chat(user, "<span class='notice'>Your hacking attempt was succesful!</span>")
		user.playsound_local(get_turf(src), 'sound/instruments/piano/An6.ogg', 50)
	else
		to_chat(user, "<span class='warning'>Your hacking attempt failed!</span>")
		return 0

	known_targets.Insert(1, D)	// Insert the newly hacked target first,
	D.register(OBSERVER_EVENT_DESTROY, src, /obj/item/device/multitool/hacktool/proc/on_target_destroy)
	return 1

/obj/item/device/multitool/hacktool/proc/sanity_check()
	if(max_known_targets < 1) max_known_targets = 1
	// Cut away the oldest items if the capacity has been reached
	if(known_targets.len > max_known_targets)
		for(var/i = (max_known_targets + 1) to known_targets.len)
			var/atom/A = known_targets[i]
			A.unregister(OBSERVER_EVENT_DESTROY, src)
		known_targets.Cut(max_known_targets + 1)

/obj/item/device/multitool/hacktool/proc/on_target_destroy(var/target)
	known_targets -= target

/datum/tgui_state/default/must_hack
	var/obj/item/device/multitool/hacktool/hacktool

/datum/tgui_state/default/must_hack/New(var/hacktool)
	src.hacktool = hacktool
	..()

/datum/tgui_state/default/must_hack/Destroy()
	hacktool = null
	return ..()

/datum/tgui_state/default/must_hack/can_use_topic(src_object, mob/user)
	if(!hacktool || !hacktool.in_hack_mode || !(src_object in hacktool.known_targets))
		return STATUS_CLOSE
	return ..()
