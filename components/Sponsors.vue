<template>
  <div class="sponsor-section">
    <!-- Background overlay image -->
    <img
      src="/assets/images/final/Green overlay.png"
      alt="handshake background"
      class="green-overlay"
    />

    <!-- Foreground content -->
    <div class="sponsor-content">
      <h2 class="section-title">TRUSTED BY SPONSORS</h2>

      <div class="logos-grid">
        <img src="/assets/images/final/appcues.png" alt="Appcues" class="logo" />
        <img src="/assets/images/final/appcues.png" alt="Insightly" class="logo" />
        <img src="/assets/images/final/codeship.png" alt="Codeship" class="logo" />
        <img src="/assets/images/final/instapage.png" alt="Instapage" class="logo" />
        <img src="/assets/images/final/appcues.png" alt="Prezi" class="logo" />
        <img src="/assets/images/final/typeform.png" alt="Typeform" class="logo" />
        <img src="/assets/images/final/meetup.png" alt="Meetup" class="logo" />
        <img src="/assets/images/final/pipedrive.png" alt="Pipedrive" class="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-section {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  text-align: center;
}

.green-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 0;
}

.sponsor-content {
  position: relative;
  z-index: 1;
}

.section-title {
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: center;
}

.logo {
  position: relative;
  height: 2rem;
  filter: grayscale(1);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logo::after {
  background-color: #16B14B;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.logo:hover {
  filter: grayscale(0);
  opacity: 1;
}

.logo:hover::after {
  opacity: 0.4;
}

</style>
