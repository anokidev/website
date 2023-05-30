<!--

  @website/ui/Header.svelte

  This file contains the header.

  Copyright (C) 2023, Anokidev. All right reserved.
  This webiste is open source and is Licensed in MIT License.

-->

<!-- Main Container -->
<div>
  <!-- Bar Container -->
  <div class="m-0 p-0 flex flex-row">
    <!-- Desktop -->
    <div class="m-0 p-0 h-10 sm:hidden grid grid-rows-1 grid-cols-3">
      <!-- Logo -->
      <div class="flex justify-center">
        <img class="w-2/5 h-2/5" alt="logo" src="/navbar/logo.png"/>
      </div>
      <!-- Menu -->
      <div class="flex justify-center items-center">
          <a class="no-underline" href="/home">Home</a>
          <a class="no-underline" href="/projects">Projects</a>
          <a class="no-underline" href="/blogs">Blogs</a>
          <a class="no-underline" href="/about">About</a>
      </div>
      <!-- Quicklinks -->
      <div class="flex justify-center flex-row">
        <ul class="m-0 p-0">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <!-- Mobile -->
    <div class="sm:grid md:hidden lg:hidden grid-rows-1 grid-cols-2">
      <!-- Logo -->
      <div></div>
      <!-- Menu -->
      <div></div>
    </div>
  </div>

  <!-- MOBILE Menu Container -->
  <div>

  </div>
</div>