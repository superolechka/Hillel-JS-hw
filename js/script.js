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

    createAlbumCard(album) {
        const albumItem = document.createElement('div');
        albumItem.className = 'col-md-3 mb-3';
        albumItem.innerHTML = this.generateAlbumCardHtml(album.title, album.id);
        return albumItem;
    }

    createPhotoCard(photo) {
        const photoItem = document.createElement('div');
        photoItem.className = 'col-md-2 mb-3';
        photoItem.innerHTML = this.generatePhotoCardHtml(photo.thumbnailUrl, photo.title);
        return photoItem;
    }

    generateAlbumCardHtml(title, id) {
        return `
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <button class="btn btn-primary" onclick="app.displayPhotos(${id})">Show Photos</button>
                </div>
            </div>
        `;
    }

    generatePhotoCardHtml(thumbnailUrl, title) {
        return `
            <div class="card">
                <img src="${thumbnailUrl}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <p class="card-text">${title}</p>
                </div>
            </div>
        `;
    }

    async displayAlbums() {
        try {
            const albumsData = await this.fetchData(this.URL_GALLERY + '/albums');

            albumsData.forEach(album => {
                const albumItem = this.createAlbumCard(album);
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
                const photoItem = this.createPhotoCard(photo);
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



// const URL_GALLERY = 'https://jsonplaceholder.typicode.com';

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// function createAlbumCard(album) {
//     const albumCard = document.createElement('div');
//     albumCard.className = 'col-md-3 mb-3';
//     albumCard.innerHTML = `
//         <div class="card">
//             <div class="card-body">
//                 <h4 class="card-title">${album.title}</h4>
//                 <button class="btn btn-primary" onclick="displayPhotos(${album.id})">Show Photos</button>
//             </div>
//         </div>
//     `;
//     return albumCard;
// }

// function createPhotoCard(photo) {
//     const photoCard = document.createElement('div');
//     photoCard.className = 'col-md-2 mb-3';
//     photoCard.innerHTML = `
//         <div class="card">
//             <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
//             <div class="card-body">
//                 <p class="card-text">${photo.title}</p>
//             </div>
//         </div>
//     `;
//     return photoCard;
// }

// async function displayAlbums() {
//     try {
//         const albumsData = await fetchData(URL_GALLERY + '/albums');
//         const albumsList = document.getElementById('albumsList');

//         albumsData.forEach(album => {
//             const albumItem = createAlbumCard(album);
//             albumsList.appendChild(albumItem);
//         });
//     } catch (error) {
//         console.error('Error displaying albums:', error);
//     }
// }

// async function displayPhotos(albumId) {
//     try {
//         const photosData = await fetchData(URL_GALLERY + `/photos?albumId=${albumId}`);
//         const photosList = document.getElementById('photosList');
//         photosList.innerHTML = '';

//         photosData.forEach(photo => {
//             const photoItem = createPhotoCard(photo);
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
// });
