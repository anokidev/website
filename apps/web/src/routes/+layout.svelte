<!--

  @website/web/src/routes/+layout.svelte

  This file controls the layout template for the website.

  Copyright (C) 2023, Anokidev. All right reserved.
  This webiste is open source and is Licensed in MIT License.

-->

<script lang="ts">

  import Header from "@website/ui/Header.svelte";
  import Footer from "@website/ui/Footer.svelte";

</script>

<Header />

<slot />

<Footer />