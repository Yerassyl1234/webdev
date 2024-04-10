import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  startIndex: number = 0;
  endIndex: number = 10;
  
  constructor(private albumService: AlbumsService){}

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.updateDisplayedAlbums();
    });
  }

  updateDisplayedAlbums() {
    this.albums = this.albums.slice(this.startIndex, this.endIndex);
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(a => a.id !== id)
  }
}
