// Dropdown
const hamburger = document.getElementById('hamburger-btn')
const sidebar = document.getElementById('sidebar-area')

let opened = true;

hamburger.addEventListener('click', () => {
	function close() {
		sidebar.classList.add('sidebar-area__toggle')
		sidebar.classList.remove('sidebar-area')
		opened = false
	}
	
	function open() {
		sidebar.classList.add('sidebar-area')
		sidebar.classList.remove('sidebar-area__toggle')
		opened = true
	}

	if (opened) {
	  return close()
	}

	open()
	console.log("clicked")
})