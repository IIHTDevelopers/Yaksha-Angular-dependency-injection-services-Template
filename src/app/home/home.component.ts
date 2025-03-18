import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserProfile } from '../model/user-profile.model';  // Import the UserProfile interface

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userProfile!: UserProfile;  // Variable to hold the user profile data

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.userProfile = this.dataService.getUserProfile();  // Fetch the user profile data from the service
  }
}
