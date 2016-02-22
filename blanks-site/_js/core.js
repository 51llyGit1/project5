function hasClassName(objElement, strClass)
{
	if ( objElement.className )
	{
		var arrList = objElement.className.split(' ');
		var strClassUpper = strClass.toUpperCase();
		for ( var i = 0; i < arrList.length; i++ )
		{
			if ( arrList[i].toUpperCase() == strClassUpper ){return true;}
		}
	}
	return false;
}

function addClassName(objElement, strClass)
{
	if ( objElement.className )
	{
		var arrList = objElement.className.split(' ');
		var strClassUpper = strClass.toUpperCase();
		for ( var i = 0; i < arrList.length; i++ )
		{
			/* if the element already has the class, remove the existing class */
			if ( arrList[i].toUpperCase() == strClassUpper ){arrList.splice(i, 1);i--;} 
		}
		/* add the class to the end of the array */
		arrList[arrList.length] = strClass;
		objElement.className = arrList.join(' ');
	}
	else {objElement.className = strClass;}
}

function removeClassName(objElement, strClass)
{
	if ( objElement.className )
	{
		var arrList = objElement.className.split(' ');
		var strClassUpper = strClass.toUpperCase();
		for ( var i = 0; i < arrList.length; i++ )
		{
			if ( arrList[i].toUpperCase() == strClassUpper ){arrList.splice(i, 1);i--;}
		}
		objElement.className = arrList.join(' ');
	}
}

function clearChildren(element) {
   for (var i = 0; i < element.childNodes.length; i++) {
      var e = element.childNodes[i];
      if (e.tagName) switch (e.tagName.toLowerCase()) {
         case 'input':
            switch (e.type) {
               case "radio":
               case "checkbox": e.checked = false; break;
               case "button":
               case "submit":
               case "image": break;
               default: e.value = ''; break;
            }
            break;
         case 'select': e.selectedIndex = 0; break;
         case 'textarea': e.innerHTML = ''; break;
         default: clearChildren(e);
      }
   }
}

function toggle(div)
{
	var objElement = document.getElementById(div); 
	if(hasClassName(objElement, "visible")) 
	{
		removeClassName(objElement, "visible");
		addClassName(objElement, "hidden");
		clearChildren(objElement);
	}
	else 
	{
		removeClassName(objElement, "hidden");
		addClassName(objElement, "visible");
	}
}

function getOptionNumber(s,p)
{
	/**************************************************************************** 
	 * use "optionSelected" to track if the first, second, (etc) option was     *
	 * selected and standardise for selectboxes and radio buttons               *
	 *   0 - no valid option was selected                                       *
	 *   1 - 1st "valid" option was selected                                    *
	 *       e.g. on a select box, the first option is "--select--" so          *
	 *       the second select option is the first "valid" option.              *
	 ****************************************************************************/
	var optionSelected = 0;

	if(s.type == "radio")
	{
		var radiobuttons = p.getElementsByTagName('input');
		for(var i = 0; i < radiobuttons.length; i++) 
		{
			if(radiobuttons.item(i) == s) 
			{
				/* this is the selected radio button so map its position to the relevant option groups */
				optionSelected = i+1;
			}   
			else if(radiobuttons.item(i).name == s.name) 
			{
				/* do nothing, it is a sibling */
			}   
		}
	}	

	if(s.nodeName == "SELECT" && s.selectedIndex > 0){optionSelected = s.selectedIndex}
	return optionSelected;
}
 
function activateOptionGroup(o,p)
{
	var optionSelected = o;
	groups = p.getElementsByClassName('optionGroup');
	for(var i = 0; i < groups.length; i++)
	{
	   if(optionSelected == i+1){groups.item(i).className = "optionGroup active 1";}
	   else
	   {
	   	groups.item(i).className = "optionGroup inactive 2";
	   	clearChildren(groups.item(i));			   	
	   }
	}	
	p.className = "active 4";
}


function updateOptions(s,p)
{
	var optionSelected = getOptionNumber(s,p);
	if(optionSelected > 0) 
	{
		
		activateOptionGroup(optionSelected,p);
	}
	else
	{
		p.className = "inactive 5"
		clearChildren(p);			   	
	};

	if(s.nodeName == "INPUT")
	{
		if(s.value == ""){p.className = "optionGroup active ready"}
		else{ /* alert(s.value); p.className = "optionGroup active done" */};
//		alert("we have the node and parent for the input .. now check if there is a value for the node .. ie a file was selected .. and if so, hide all the helpers\n\nWe also need to determine which option it is and turn others off");
	}
}