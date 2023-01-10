import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.services';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit{
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;


  constructor (private githubService:GithubService) {}

   public searchUser (){
   // to get the github profile
   this.githubService.getProfile(this.githubUserQuery).subscribe((data: any) => {
    this.githubProfile = data;
       }, (error: string) => {

    this.errorMessage= error;
   });

  // get the github repos
this.githubService.getRepos(this.githubUserQuery).subscribe((data) => {
  this.githubRepos = data;
 },

     (error) => {
  this.errorMessage = error;
 });

}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
