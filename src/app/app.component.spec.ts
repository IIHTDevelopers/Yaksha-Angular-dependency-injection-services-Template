import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, HomeComponent, EditProfileComponent],
            imports: [RouterTestingModule.withRoutes([
                { path: '', component: HomeComponent },
                { path: 'edit-profile', component: EditProfileComponent }
            ])],
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should navigate to "EditProfile" when the "Edit Profile" link is clicked', async () => {
            const link = fixture.nativeElement.querySelector('a[href="/edit-profile"]');
            link.click();
            fixture.detectChanges();
            await fixture.whenStable();
            expect(location.path()).toBe('/edit-profile');
        });

        it('should navigate to "home" when the "Go Home" link is clicked', async () => {
            router.navigate(['/']);
            fixture.detectChanges();
            await fixture.whenStable();

            const link = fixture.nativeElement.querySelector('a[href="/"]');
            link.click();
            fixture.detectChanges();
            await fixture.whenStable();
            expect(location.path()).toBe('/');
        });
    });
});
