/mob/living/carbon/human/update_fullness()
	var/previous_stomach_fullness = vore_fullness_ex["stomach"]
	var/previous_taur_fullness = vore_fullness_ex["taur belly"]
	//update_vore_tail_sprite()
	//update_vore_belly_sprite()
	var/list/new_fullness = ..()
	. = new_fullness
	for(var/datum/category_group/underwear/undergarment_class in global_underwear.categories)
		if(new_fullness[undergarment_class.name] == 0)
			continue
		new_fullness[undergarment_class.name] = -1 * round(-1 * new_fullness[undergarment_class.name]) // Doing a ceiling the only way BYOND knows how I guess
		new_fullness[undergarment_class.name] = (min(2, new_fullness[undergarment_class.name]) - 2) * -1 //Complicated stuff to get it correctly aligned with the expected TRUE/FALSE
		var/datum/category_item/underwear/UWI = all_underwear[undergarment_class.name]
		if(!UWI || UWI.name == "None")
			//Welllll okay then. If the former then something went wrong, if None was selected then...
			if(istype(undergarment_class.items_by_name[new_fullness[undergarment_class.name + "-ifnone"]], /datum/category_item/underwear))
				UWI = undergarment_class.items_by_name[new_fullness[undergarment_class.name + "-ifnone"]]
				all_underwear[undergarment_class.name] = UWI
		if(UWI && UWI.has_color && new_fullness[undergarment_class.name + "-color"])
			all_underwear_metadata[undergarment_class.name]["[gear_tweak_free_color_choice]"] = new_fullness[undergarment_class.name + "-color"]
		if(UWI && UWI.name != "None" && hide_underwear[undergarment_class.name] != new_fullness[undergarment_class.name])
			hide_underwear[undergarment_class.name] = new_fullness[undergarment_class.name]
			update_underwear(1)
	if(vore_fullness_ex["stomach"] != previous_stomach_fullness)
		update_vore_belly_sprite()
	if(vore_fullness_ex["taur belly"] != previous_taur_fullness)
		update_vore_tail_sprite()

/mob/living/carbon/human/vs_animate(var/belly_to_animate)
	if(belly_to_animate == "stomach")
		vore_belly_animation()
	else if(belly_to_animate == "taur belly")
		vore_tail_animation()
	else
		return

/mob/living/carbon/human/verb/hide_headset()
	set name = "Show/Hide Headset"
	set category = "IC"
	set desc = "Toggle headset worn icon visibility."
	hide_headset = !hide_headset
	update_inv_ears()

/mob/living/carbon/human/verb/hide_glasses()
	set name = "Show/Hide Glasses"
	set category = "IC"
	set desc = "Toggle glasses worn icon visibility."
	hide_glasses = !hide_glasses
	update_inv_glasses()
