# Buggy Page Implementation Guide for Nuxt

This guide provides detailed instructions for implementing the buggy tour page in your Nuxt application, migrating from the existing Vue 3 implementation.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Implementation Steps](#implementation-steps)
4. [Styling](#styling)
5. [Integration with Booking System](#integration-with-booking-system)
6. [Testing](#testing)

## Overview

The buggy tour page showcases an exciting off-road adventure experience in the Snæfellsjökull area. The page includes:

- A hero image
- Tour description and details
- Booking functionality
- Information about the tour guide and certifications

## File Structure

In Nuxt, pages are automatically routed based on their file structure. Here's how to organize your files:

```
pages/
  tours/
    buggy.vue         # Main buggy tour page
components/
  shared/
    BuggyEssentials.vue  # Dialog for buggy tour essentials
assets/
  images/
    buggy.sida.jpg    # Hero image
    day-tour-license.jpg  # Certification image
  scss/
    base.scss         # Base styles
    mixins.scss       # SCSS mixins
    variables.scss    # SCSS variables
```

## Implementation Steps

### 1. Create the Buggy Page Component

Create a file at `pages/tours/buggy.vue`:

```vue
<template>
  <div class="buggy-tour--container">
    <div class="image">
      <TwicImg class="twic-image" src="buggy.sida.jpg" alt="Buggy tour in Snæfellsjökull" />
    </div>
    <div class="header--container">
      <h1>{{ $t("buggy.content.header") }}</h1>
      <button 
        class="bokunButton primary sticky js-bokunButton" 
        disabled 
        id="bokun_b0c877a8_9a94_4d9d_8e04_cbabb9212f5c"
        data-src="https://widgets.bokun.io/online-sales/a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c/experience/1019284?partialView=1"
        data-testid="widget-book-button" 
        @click="trackBookNow"
      >
        {{ $t("shared.bokun.buttons.book") }}
      </button>
    </div>
    <div class="content--wrapper">
      <p>{{ $t("buggy.content.p1") }}</p>
      <p>{{ $t("buggy.content.p2") }}</p>
      <p>{{ $t("buggy.content.p3") }}</p>
      <p>{{ $t("buggy.content.p4") }}</p>
      <h2 class="tour-info-header">{{ $t("buggy.info.header") }}</h2>
      <div class="tour-info">
        <div>
          <p>{{ $t("buggy.info.p1") }}</p>
          <p>{{ $t("buggy.info.p2") }}</p>
          <p>{{ $t("buggy.please_note.p1") }}</p>
          <p>{{ $t("buggy.please_note.p2") }}</p>
          <p>{{ $t("buggy.please_note.p3") }}</p>
          <p>{{ $t("buggy.please_note.p4") }}</p>
          <p>{{ $t("buggy.please_note.p5") }}</p>
        </div>
        <div class="tour-info__guide">
          <div>
            <p>{{ $t("buggy.info.p3") }}</p>
            <button class="primary small" @click="openDialog">
              {{ $t("shared.links.readMore") }}
            </button>
          </div>
          <div class="certificates">
            <img src="/images/day-tour-license.jpg" alt="Day tour license" />
          </div>
        </div>
      </div>
    </div>
    <aside class="sidebar--container">
      <!-- Sidebar content with booking widget -->
      <div class="bokun-widget">
        <div id="bokun-widget-b0c877a8_9a94_4d9d_8e04_cbabb9212f5c">
          <div class="bokun-loading-widget">
            {{ $t("shared.bokun.loading") }}
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { onBeforeMount, inject } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = inject('Store');

// Load Bokun widget script
onBeforeMount(() => {
  const tag = document.createElement("script");
  tag.setAttribute(
    "src",
    "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c"
  );
  document.head.appendChild(tag);
});

// Track booking events
const trackBookNow = () => {
  window.beam("/custom-events/buggy-tour-book-now");
};

// Open dialog with additional information
const openDialog = () => {
  store.isDialogOpen = true;
  store.currentDialog = "buggy";
  window.beam("/custom-events/buggy-tour-read-more");
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.buggy-tour--container {
  display: grid;
  grid-template-columns: 1fr;
  background-color: $sapphire_blue;

  .image {
    grid-area: 1/1/-1/-1;

    .twic-image {
      --twic-ratio: 3;
    }
  }

  .sticky {
    grid-area: 1/1/-1/-1;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    z-index: 1;
  }

  h2 {
    color: $yellow;
  }

  p {
    color: $white;
  }

  .header--container {
    grid-area: 1/1/-1/-1;
    color: cornsilk;
    padding-top: 1.5rem;
    padding-left: 2rem;
    z-index: 1;
  }

  .content--wrapper {
    grid-area: 2/1/3/2;
    padding: 1rem 2rem;
    z-index: 1;

    .tour-info-header {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }

    .tour-info {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .tour-info__guide {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      align-items: center;

      .certificates {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }

  .sidebar--container {
    grid-area: 3/1/4/2;
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    background-color: rgba($dark_grey, 0.9);
    z-index: 1;

    .bokun-widget {
      width: 100%;
      height: 100%;
      min-height: 400px;
    }

    .bokun-loading-widget {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: $white;
    }
  }

  /* Responsive styles for tablet and desktop */
  @include for-tablet-landscape-up {
    grid-template-columns: 1fr 1fr 1.5fr;
    @include white-blue-bg-gradient(60deg);

    .image {
      .twic-image {
        --twic-ratio: 1.8;
      }
    }

    .content--wrapper {
      grid-area: 2/1/3/3;

      .tour-info {
        grid-template-columns: 1fr 1fr;
      }

      .tour-info__guide {
        margin-top: unset;
        flex-direction: column;

        .certificates {
          margin-top: 1rem;
        }
      }
    }

    .sidebar--container {
      grid-area: 1/3/3/4;
      align-self: center;
      margin-right: 3rem;
      margin: 1rem 2rem 1rem 0;
    }
  }

  @include for-medium-desktop-up {
    .image {
      .twic-image {
        --twic-ratio: 3;
      }
    }

    .sidebar--container {
      margin-right: 5rem;
    }
  }
}
</style>
```

### 2. Create the Buggy Essentials Dialog Component

Create a file at `components/shared/BuggyEssentials.vue`:

```vue
<template>
  <div class="dialog-content">
    <h2>{{ $t("buggy.essentials.header") }}</h2>
    <div class="essentials-content">
      <p>{{ $t("buggy.essentials.p1") }}</p>
      <p>{{ $t("buggy.essentials.p2") }}</p>
      <p>{{ $t("buggy.essentials.p3") }}</p>
      <p>{{ $t("buggy.essentials.p4") }}</p>
      <p>{{ $t("buggy.essentials.p5") }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.dialog-content {
  padding: 1rem;
  
  h2 {
    color: $yellow;
    margin-bottom: 1rem;
  }
  
  .essentials-content {
    p {
      margin-bottom: 0.8rem;
      color: $white;
    }
  }
}
</style>
```

## Integration with Booking System

The buggy page integrates with the Bokun booking system. Here's how to set it up:

1. **Load the Bokun Script**: The script is loaded in the `onBeforeMount` hook.

2. **Configure the Booking Button**: The button is configured with the appropriate data attributes:
   - `data-src`: The URL for the booking widget
   - `id`: A unique ID for the widget

3. **Handle Booking Events**: The `trackBookNow` function is called when the user clicks the booking button.

## Testing

To ensure your buggy page works correctly:

1. **Visual Testing**:
   - Test the page on different screen sizes
   - Verify that the layout adjusts correctly on mobile, tablet, and desktop
   - Check that the booking widget loads and functions properly

2. **Functional Testing**:
   - Test the "Read More" button to ensure it opens the dialog
   - Verify that the booking button works correctly
   - Check that all translations are displayed properly

3. **Performance Testing**:
   - Measure the page load time
   - Optimize images using TwicPics
   - Ensure the booking widget doesn't slow down the page

## Conclusion

You've successfully implemented the buggy tour page in your Nuxt application. This page showcases the exciting buggy tour experience and provides users with all the information they need to book the tour.

Remember to update your translation files with all the necessary text for the buggy tour page and ensure that the TwicPics integration is properly configured for image handling.
