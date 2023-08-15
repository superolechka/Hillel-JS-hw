'use strict'

class GalleryApp {
    constructor() {
        this.URL_GALLERY = 'https://jsonplaceholder.typicode.com';
        this.albumsList = document.getElementById('albumsList');
        this.photosList = document.getElementById('photosList');
        
        this.init();
    }
    
    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async displayAlbums() {
        try {
            const albumsData = await this.fetchData(this.URL_GALLERY + '/albums');

            albumsData.forEach(album => {
                const albumItem = document.createElement('div');
                albumItem.className = 'col-md-3 mb-3';
                albumItem.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">${album.title}</h4>
                            <button class="btn btn-primary" onclick="app.displayPhotos(${album.id})">Show Photos</button>
                        </div>
                    </div>
                `;
                this.albumsList.appendChild(albumItem);
            });
        } catch (error) {
            console.error('Error displaying albums:', error);
        }
    }

    async displayPhotos(albumId) {
        try {
            const photosData = await this.fetchData(this.URL_GALLERY + `/photos?albumId=${albumId}`);
            this.photosList.innerHTML = '';

            photosData.forEach(photo => {
                const photoItem = document.createElement('div');
                photoItem.className = 'col-md-2 mb-3';
                photoItem.innerHTML = `
                    <div class="card">
                        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                        <div class="card-body">
                            <p class="card-text">${photo.title}</p>
                        </div>
                    </div>
                `;
                this.photosList.appendChild(photoItem);
            });

            this.albumsList.style.display = 'none';
            this.photosList.style.display = 'flex';
        } catch (error) {
            console.error('Error displaying photos:', error);
        }
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.displayAlbums();
        });
    }
}

const app = new GalleryApp();


// const URL_GALLARY = 'https://jsonplaceholder.typicode.com';

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// async function displayAlbums() {
//     try {
//         const albumsData = await fetchData(URL_GALLARY+'/albums');
//         const albumsList = document.getElementById('albumsList');

//         albumsData.forEach(album => {
//             const albumItem = document.createElement('div');
//             albumItem.className = 'col-md-3 mb-3';
//             albumItem.innerHTML = `
//                 <div class="card">
//                     <div class="card-body">
//                         <h4 class="card-title">${album.title}</h4>
//                         <button class="btn btn-primary" onclick="displayPhotos(${album.id})">Show Photos</button>
//                     </div>
//                 </div>
//             `;
//             albumsList.appendChild(albumItem);
//         });
//     } catch (error) {
//         console.error('Error displaying albums:', error);
//     }
// }

// async function displayPhotos(albumId) {
//     try {
//         const photosData = await fetchData(URL_GALLARY + `/photos?albumId=${albumId}`);
//         const photosList = document.getElementById('photosList');
//         photosList.innerHTML = '';

//         photosData.forEach(photo => {
//             const photoItem = document.createElement('div');
//             photoItem.className = 'col-md-2 mb-3';
//             photoItem.innerHTML = `
//                 <div class="card">
//                     <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
//                     <div class="card-body">
//                         <p class="card-text">${photo.title}</p>
//                     </div>
//                 </div>
//             `;
//             photosList.appendChild(photoItem);
//         });

//         document.getElementById('albumsList').style.display = 'none';
//         photosList.style.display = 'flex';
//     } catch (error) {
//         console.error('Error displaying photos:', error);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     displayAlbums();
// })
