let menu_icons = document.querySelector('.menu-icons'),
nav = document.querySelector('nav');

menu_icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});


const widgetContainer = document.querySelector('.wrap-content')
const foundation = 'Academic Foundation Year';
const undergraduate = 'Undergraduate Program';
const graduate = 'Graduate Program';
const programmes = [
                {image:'img/UFY.png', name: 'University Foundation Year', description: foundation},
                {image:'img/BCS_program.png', name: 'Bechelor of Computer Science', description: undergraduate},
                {image:'img/BBA_program.png', name: 'Bechelor of Business Administration', description: undergraduate},
                {image:'img/BCSA_program.png', name: 'Bechelor of Computer Science in Animation', description: undergraduate},
                {image:'img/BED_program.png', name: 'Becholor of Education', description: undergraduate},
                {image:'img/MPA_program.png', name: 'Master of Public Administration', description: graduate},
                {image:'img/MED_program.png', name: 'Master of Education', description: graduate},
                {image:'img/MPH_program.png', name: 'Master of Public Health', description: graduate},

            ];

            for (const programme of programmes){
                const card = document.createElement('div');
                card.classList.add('widget-item');
                card.innerHTML = `
                <img src = '${programme.image}'>
                <h2>${programme.name}</h2>
                <div class = 'icon'>
                    <img src = 'img/Main_Component.png'>
                    <p>${programme.description}</p>
                </div>
                <button class="apply-button">Apply</button>
                `
                widgetContainer.appendChild(card);
            }
