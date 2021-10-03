

const setTheme = (theme) => {


    if (theme === 'light-mode') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (theme === 'blue-mode') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (theme === 'green-mode') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (theme === 'purple-mode') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', theme)
}


console.log("Its Working...")

let theme = localStorage.getItem('theme');


if (theme === null) {
    setTheme("light-mode")
} else {
    setTheme(theme)
}

const themeDot = document.getElementsByClassName('theme-dot')

for (let i = 0; themeDot.length > i; i++) {
    themeDot[i].addEventListener('click', () => {
        console.log("clicked on themeDot : ", themeDot[i].id)
        setTheme(themeDot[i].id)
    })
}


