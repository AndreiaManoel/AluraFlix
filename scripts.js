document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#novo-video-form form');
    const videosSection = document.getElementById('videos');
    const homeButton = document.getElementById('home');
    const novoVideoButton = document.getElementById('novo-video');
    const homeSection = document.getElementById('home-section');
    const novoVideoForm = document.getElementById('novo-video-form');

    const videosPredefinidos = [
        {
            titulo: 'Exemplo de Vídeo 1',
            categoria: 'Categoria 1',
            imagem: 'https://via.placeholder.com/150',
            urlVideo: 'https://www.youtube.com/watch?v=example1',
            descricao: 'Descrição do vídeo 1'
        },
        {
            titulo: 'Exemplo de Vídeo 2',
            categoria: 'Categoria 2',
            imagem: 'https://via.placeholder.com/150',
            urlVideo: 'https://www.youtube.com/watch?v=example2',
            descricao: 'Descrição do vídeo 2'
        }
    ];

    const carregarVideos = (videos) => {
        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                <img src="${video.imagem}" alt="${video.titulo}">
                <h3>${video.titulo}</h3>
                <p>Categoria: ${video.categoria}</p>
                <a href="${video.urlVideo}" target="_blank">Assistir Vídeo</a>
                <p>${video.descricao}</p>
                <button class="edit-button">Editar</button>
            `;
            videosSection.appendChild(videoCard);
        });
    };

    carregarVideos(videosPredefinidos);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const categoria = document.getElementById('categoria').value;
        const imagem = document.getElementById('imagem').value;
        const urlVideo = document.getElementById('url-video').value;
        const descricao = document.getElementById('descricao').value;

        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img src="${imagem}" alt="${titulo}">
            <h3>${titulo}</h3>
            <p>Categoria: ${categoria}</p>
            <a href="${urlVideo}" target="_blank">Assistir Vídeo</a>
            <p>${descricao}</p>
            <button class="edit-button">Editar</button>
        `;

        videosSection.appendChild(videoCard);

        form.reset();
        toggleSection('home');
    });

    videosSection.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-button')) {
            const videoCard = e.target.parentElement;
            const titulo = videoCard.querySelector('h3').textContent;
            const categoria = videoCard.querySelector('p').textContent.split(': ')[1];
            const imagem = videoCard.querySelector('img').src;
            const urlVideo = videoCard.querySelector('a').href;
            const descricao = videoCard.querySelector('p:last-of-type').textContent;

            document.getElementById('titulo').value = titulo;
            document.getElementById('categoria').value = categoria;
            document.getElementById('imagem').value = imagem;
            document.getElementById('url-video').value = urlVideo;
            document.getElementById('descricao').value = descricao;

            videoCard.remove();
            toggleSection('novo-video');
        }
    });

    homeButton.addEventListener('click', () => {
        toggleSection('home');
    });

    novoVideoButton.addEventListener('click', () => {
        toggleSection('novo-video');
    });

    const toggleSection = (section) => {
        if (section === 'home') {
            homeSection.style.display = 'block';
            novoVideoForm.style.display = 'none';
            homeButton.classList.add('active');
            novoVideoButton.classList.remove('active');
        } else {
            homeSection.style.display = 'none';
            novoVideoForm.style.display = 'block';
            homeButton.classList.remove('active');
            novoVideoButton.classList.add('active');
        }
    };
});
