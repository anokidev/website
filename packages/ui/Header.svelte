<!--

  @website/ui/Header.svelte

  This file contains the header.

  Copyright (C) 2023, Anokidev. All right reserved.
  This webiste is open source and is Licensed in MIT License.

-->

<!-- Main Container -->
<div class="flex flex-row">

  <!-- Desktop -->
  <div class="sm:hidden md:hidden lg:grid grid-rows-1 grid-cols-3">
    <!-- Logo -->
    <div></div>
    <!-- Menu -->
    <div class="flex justify-center flex-row">
      <ul class="m-0 p-0">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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