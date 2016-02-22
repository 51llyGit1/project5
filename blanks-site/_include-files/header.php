

<?php include $_SERVER['DOCUMENT_ROOT'] . "/_include-files/analyticstracking.php"; ?>

<!-- testing device -- do not delete -- used to display stylesheets used when a parent element has a "test" class defined -->
<div class="css-info">
	<span id="global"></span>
	<span id="small"></span>
	<span id="medium"></span>
	<span id="large"></span>
	<span id="xlarge"></span>
	<span id="xxlarge"></span>
</div>
<!-- end testing device -->






<script>
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

function toggle(div)
{
	var objElement = document.getElementById(div); 
	if(hasClassName(objElement, "visible")) 
	{
		removeClassName(objElement, "visible");
		addClassName(objElement, "hidden");
	}
	else 
	{
		removeClassName(objElement, "hidden");
		addClassName(objElement, "visible");
	}
}
</script>

<div id="header">
	<div id="header-top">
		<a id="title" href="/">Mayer Guitars</a>


		<a id="menu-toggle" href="#" onclick="toggle('header-menu')">Menu&nbsp;<i class="fa fa-bars"></i></a>
		<div class="br"></div>
	</div><!-- end header-top -->

	<div id="header-menu" class="menu">
		<?php include $_SERVER['DOCUMENT_ROOT'] . "/_include-files/menu.php"; ?>
	</div>

	<div class="br"></div>


	<div id="login">
		<ul>
			<li><a href="/membership">Request membership</a></li>
			<li><a href="/login">Login</a></li>
		</ul>
	</div>
	<div class="br"></div>
</div>




