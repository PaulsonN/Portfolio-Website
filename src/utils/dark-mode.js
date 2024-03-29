const darkMode = () =>{
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    const theme = localStorage.getItem('theme');

    //on mouth
    theme && document.body.classList.add(theme);

    //handlers
    const handleThemeToggle = () =>{
        document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme','light-mode');
        } else{
          localStorage.removeItem('theme');
        } 
    };

    //events

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click',() => {
            document.body.classList.toggle('light-mode');
            if(document.body.classList.contains('light-mode')){
                localStorage.setItem('theme','light-mode');
            } else{
              localStorage.removeItem('theme');
            } 
        });

    });
};

export default darkMode;