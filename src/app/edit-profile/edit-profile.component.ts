import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { UserProfile } from '../model/user-profile.model';  // Import the UserProfile interface

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  userProfile: UserProfile;  // Variable to hold the user profile data

  constructor(private dataService: DataService) {
    this.userProfile = this.dataService.getUserProfile();  // Fetch the existing user profile data
  }

  // Method to update the profile data
  updateProfile(): void {
    this.dataService.updateUserProfile(this.userProfile);  // Update the profile data in the service
  }
}
