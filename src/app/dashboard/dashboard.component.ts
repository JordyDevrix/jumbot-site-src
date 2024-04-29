import {Component, OnInit} from '@angular/core';
import { createClient } from '@supabase/supabase-js'
import { async } from "rxjs";
import { Router } from "@angular/router";

const supabase = createClient(
  "https://kjykbeysqwgibzscbzmr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqeWtiZXlzcXdnaWJ6c2Niem1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0NTIzOTAsImV4cCI6MjAyODAyODM5MH0.yvZ-iOj8DB5cNrp0VEvnfpfAZnr4EUvC_UzEwts8f1Q"
)

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor() {}

}
