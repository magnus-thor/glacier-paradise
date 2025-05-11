# Migrating Vue 3 Components to Nuxt: Buggy Page and New-Label Implementation Guide

This guide will walk you through the process of implementing the buggy page and adding a new-label feature to cards in your Nuxt application. We'll cover the migration from Vue 3 to Nuxt, focusing on component structure, styling, and responsive design.

## Table of Contents

1. [Setting Up Nuxt Project](#setting-up-nuxt-project)
2. [Creating the Buggy Page](#creating-the-buggy-page)
3. [Implementing the New-Label Feature](#implementing-the-new-label-feature)
4. [Testing and Responsive Design](#testing-and-responsive-design)

## Setting Up Nuxt Project

Before we begin, ensure you have a Nuxt project set up. If you're migrating from Vue 3, you'll need to adapt your components to the Nuxt structure.

```bash
# Install Nuxt if you haven't already
npx nuxi init my-nuxt-app
cd my-nuxt-app
npm install

# Install TwicPics for image handling (as used in your Vue project)
npm install @twicpics/components
```

Configure TwicPics in your `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    // Other modules
  ],
  build: {
    transpile: ["@twicpics/components/vue3"],
  },
  app: {
    head: {
      script: [
        // Add any scripts needed for your components
      ],
    },
  },
});
```

## Creating the Buggy Page

In Nuxt, pages are automatically routed based on their file structure in the `pages` directory. Let's create the buggy tour page:

### 1. Create the Buggy Page Component

Create a file at `pages/tours/buggy.vue`:

```vue
<template>
  <div class="buggy-tour--container">
    <div class="image">
      <TwicImg
        class="twic-image"
        src="buggy.sida.jpg"
        alt="Buggy tour in Snæfellsjökull"
      />
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
      <!-- Sidebar content -->
    </aside>
  </div>
</template>

<script setup>
import { onBeforeMount, inject } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = inject("Store");

onBeforeMount(() => {
  const tag = document.createElement("script");
  tag.setAttribute(
    "src",
    "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c"
  );
  document.head.appendChild(tag);
});

const trackBookNow = () => {
  window.beam("/custom-events/buggy-tour-book-now");
};

const openDialog = () => {
  store.isDialogOpen = true;
  store.currentDialog = "buggy";
  window.beam("/custom-events/buggy-tour-read-more");
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

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

  /* Add responsive styles for tablet and desktop */
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
      background-color: rgba($dark_grey, 0.9);
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

## Implementing the New-Label Feature

Now, let's implement the new-label feature for cards. This feature will add a distinctive corner border with the word 'New' to highlight new features while maintaining visual appeal.

### Key Requirements for the New-Label:

1. **Positioning**:

   - On small screens: The new-label should be on the left side of the card since the border-radius is on the right side
   - On large screens: The new-label should always be on the opposite side of the alternating border-radius

2. **Visual Design**:

   - Diagonal orientation over the corner
   - Shorter in length than standard labels
   - Red, glossy background with white text
   - Distinctive corner border

3. **Animation**:
   - Subtle pulse animation to draw attention without being distracting

### 1. Create the Card Component

Create a file at `components/HomeCard.vue`:

```vue
<template>
  <div
    :class="[
      'tour',
      { 'row-reverse': reverseFlow },
      { 'custom-tours': cardIndex === 2 },
      { cabin: cardIndex === 3 },
      { buggy: cardIndex === 4 },
    ]"
  >
    <div :class="['tour--image', { 'border-reverse': reverseFlow }]">
      <TwicImg class="twic-image" :src="getImageSrc" :alt="image.alt" />
      <div v-if="isNew" class="new-label">New</div>
    </div>
    <div
      :class="[
        'tour--text',
        { 'border-reverse': reverseFlow },
        { gradient0: cardIndex === 0 },
        { gradient1: cardIndex === 1 },
        { gradient2: cardIndex === 2 },
        { gradient3: cardIndex === 3 },
        { gradient4: cardIndex === 4 },
      ]"
    >
      <h3>{{ card.header }}</h3>
      <p>{{ card.text }}</p>
      <p v-if="card.additionalText || link.href" class="additional">
        <span v-if="card.additionalText">{{ card.additionalText }} </span>
        <NuxtLink v-if="link.href" class="router-link" :to="link.href">
          {{ link.text ? link.text : $t("shared.links.readMore") }}
        </NuxtLink>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  image: {
    required: true,
    type: Object,
  },
  card: {
    required: true,
    type: Object,
  },
  link: {
    required: true,
    type: Object,
  },
  cardIndex: Number,
  isNew: {
    type: Boolean,
    default: false,
  },
});

const reverseFlow = computed(() => {
  return props.cardIndex % 2 !== 0;
});

const getImageSrc = computed(() => {
  return props.image.src.replace("images/", "");
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.tour {
  width: 100%;
  display: flex;
  flex-direction: column;

  + .tour {
    margin-top: 5rem;
  }

  h3 {
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 4px solid $blue;
    color: $card_header_color;
  }

  p {
    padding: 1rem;
    color: $card_text_color;

    + p {
      padding-top: 0;
    }
  }

  .additional {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }

  .tour--image {
    width: 94%;
    margin: auto;
    margin-bottom: 0.4rem;
    position: relative;

    .twic-image {
      width: 100%;
      --twic-ratio: 2;
      border-radius: 0 25% 0 0;
    }

    /* Enhanced new-label styling */
    .new-label {
      /* Positioning */
      position: absolute;
      top: 30px;
      left: -15px; /* Default position for small screens */

      /* Background and colors */
      background: linear-gradient(
        to bottom,
        #ff5a5f,
        #e63946
      ); /* Red glossy gradient */
      color: white;

      /* Text styling */
      font-weight: bold;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;

      /* Dimensions and padding */
      padding: 0.3rem 0;
      width: 60px; /* Shorter length as requested */

      /* 3D and visual effects */
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle white border for depth */

      /* Rotation for diagonal appearance */
      transform-origin: top left;
      transform: rotate(-45deg);

      /* Other */
      z-index: 1;
      overflow: hidden;

      /* Animation */
      animation: pulse 2s infinite;

      /* Distinctive corner shape with varied border radius */
      border-top-left-radius: 40%;
      border-top-right-radius: 40%;
      border-bottom-left-radius: 10%;
      border-bottom-right-radius: 12%;

      /* Optional pseudo-elements for additional styling */
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
      }
    }
  }

  .tour--text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: $dark_grey;

    &.gradient0 {
      @include gold-bg-gradient(20deg);
    }

    &.gradient1 {
      @include gold-bg-gradient;
    }

    &.gradient2 {
      @include gold-bg-gradient(20deg);
    }

    &.gradient3 {
      @include gold-bg-gradient;
    }

    &.gradient4 {
      @include gold-bg-gradient(20deg);
    }

    margin-left: 3%;
    margin-right: 3%;
    border-radius: 0 0 0 25%;
  }

  .router-link {
    color: $card_link_color;
    font-weight: bold;
    margin-bottom: 1rem;
    justify-self: flex-end;

    &:hover {
      color: $card_link_color__hover;
    }
  }

  /* Responsive styles */
  @include for-tablet-landscape-up {
    flex-direction: row;
    max-width: 1024px;

    &.row-reverse {
      flex-direction: row-reverse;
    }

    .tour--text {
      padding: 1rem;
      width: 60%;
      border-radius: 0% 25%;
      margin-right: 0;
      margin-left: 2%;

      &.border-reverse {
        border-radius: 25% 0%;
        margin-right: 2%;
        margin-left: 0;
      }
    }

    .tour--image {
      height: auto;
      width: 40%;
      margin: 0;
      display: flex;

      .twic-image {
        --twic-ratio: 1;
        border-radius: 25% 0;
        flex: 1;
      }

      /* For large screens, position the label on the right for even cards */
      .new-label {
        left: auto;
        right: -15px;
        transform-origin: top right;
        transform: rotate(45deg);

        &::before {
          right: 100%;
          left: auto;
          border-width: 0 0 10px 10px;
          border-color: transparent transparent #b52c37 transparent;
        }

        &::after {
          bottom: 100%;
          left: 0;
          right: auto;
          border-width: 10px 10px 0 0;
          border-color: transparent #b52c37 transparent transparent;
        }
      }

      &.border-reverse {
        .twic-image {
          border-radius: 0 25%;
        }

        /* For large screens with reversed flow, position the label on the left */
        .new-label {
          left: -15px;
          right: auto;
          top: 30px;
          transform-origin: top left;
          transform: rotate(-45deg);
          background: linear-gradient(to bottom, #ff5a5f, #e63946);
          border-top-left-radius: 40%;
          border-top-right-radius: 40%;
          border-bottom-left-radius: 10%;
          border-bottom-right-radius: 12%;

          &::before {
            right: auto;
            left: 100%;
            border-width: 0 10px 10px 0;
            border-color: transparent transparent #b52c37 transparent;
          }

          &::after {
            bottom: 100%;
            left: auto;
            right: 0;
            border-width: 10px 0 0 10px;
            border-color: transparent transparent transparent #b52c37;
          }
        }
      }
    }

    &.custom-tours {
      max-height: 22rem;
    }

    .router-link {
      margin-bottom: 0;
    }
  }
}

/* Add pulse animation for the new-label */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(230, 57, 70, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(230, 57, 70, 0);
  }
}

/* Optional: Add a subtle shine effect for the glossy appearance */
@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* To use the shine effect, add this to the .new-label:
  background: linear-gradient(
    to right,
    #e63946 0%,
    #ff5a5f 25%,
    #ff5a5f 50%,
    #e63946 100%
  );
  background-size: 200% auto;
  animation: pulse 2s infinite, shine 3s linear infinite;
*/
</style>
```

### 2. Create the Cards Container Component

Create a file at `components/HomeCards.vue`:

```vue
<template>
  <div class="cards">
    <template v-for="(card, index) in allCards" :key="index">
      <HomeCard
        :image="{ src: card.imageSrc, alt: $t(card.imageAlt) }"
        :card="{
          header: $t(card.cardHeader),
          text: $t(card.cardText),
          additionalText: $t(card.cardAdditionalText),
        }"
        :link="{ text: $t(card.linkText), href: card.linkHref }"
        :cardIndex="index"
        :isNew="card.isNew"
      >
        <slot v-if="index == 4">
          <div class="airbnb-links">
            <a
              class="nav__link"
              href="https://www.airbnb.com/rooms/806308046534973154"
            >
              {{ $t("home.tours.cabin.cottage1") }}
            </a>
            <a
              class="nav__link"
              href="https://www.airbnb.co.uk/rooms/934605024384982028"
            >
              {{ $t("home.tours.cabin.cottage2") }}
            </a>
          </div>
        </slot>
      </HomeCard>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { cardsInfo } from "@/assets/tours-info/home-cards-info";

const { t } = useI18n();
const allCards = ref(cardsInfo);
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.cards {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: -1;
  margin-bottom: 5rem;
}

.nav__link {
  margin-top: 0.6rem;
  color: $blue;

  a {
    color: $card_link_color;
    font-weight: bold;
    padding: 0 0.5rem;

    &:hover {
      color: $card_link_color__hover;
    }
  }

  @include for-tablet-landscape-down {
    + .nav__link {
      margin-bottom: 3.5rem;
    }
  }
}

.airbnb-links {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  padding-left: 1rem;

  a + a {
    margin-top: 0.8rem;
  }
}
</style>
```

## Testing and Responsive Design

To ensure your components work correctly across different devices, test them thoroughly:

### 1. Visual Testing

1. **Browser Testing**:

   - Test in Chrome, Firefox, Safari, and Edge
   - Verify that the new-label appears with the correct styling in each browser
   - Check that animations work properly across browsers

2. **Device Testing**:

   - Test on mobile, tablet, and desktop viewports
   - Use browser developer tools to simulate different screen sizes
   - If possible, test on actual devices (iPhone, Android, iPad, etc.)

3. **Responsive Design**:
   - Verify that the new-label appears correctly on all screen sizes
   - Check that the label repositions correctly when the screen size changes
   - Ensure the text remains readable at all sizes

### 2. Implementation Testing

Create a simple test component to verify the new-label functionality:

```vue
<template>
  <div class="test-container">
    <h2>New Label Test</h2>
    <div class="test-cards">
      <HomeCard
        v-for="(isNewValue, index) in [true, false]"
        :key="index"
        :image="{ src: 'test-image.jpg', alt: 'Test image' }"
        :card="{
          header: isNewValue ? 'New Feature Card' : 'Regular Card',
          text: 'This card is used to test the new-label feature',
          additionalText: '',
        }"
        :link="{ text: 'Read More', href: '#' }"
        :cardIndex="index"
        :isNew="isNewValue"
      />
    </div>
  </div>
</template>

<script setup>
// Import components and setup code
</script>

<style scoped>
.test-container {
  padding: 2rem;
}
.test-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
```

### 3. Responsive Design Checklist

- [ ] New-label is visible and properly positioned on mobile devices
- [ ] New-label is on the left side for small screens
- [ ] On large screens, new-label is on the opposite side of the alternating border-radius
- [ ] New-label text is readable at all screen sizes
- [ ] Animation effects are subtle and not distracting
- [ ] Card layout adjusts properly between mobile and desktop views
- [ ] Buggy page layout is responsive and maintains readability on all devices

### 4. Edge Cases to Test

- [ ] Very small screens (320px width)
- [ ] Very large screens (4K displays)
- [ ] High contrast mode and accessibility features
- [ ] RTL language support if your application is multilingual
- [ ] Slow network conditions (animations should not affect performance)

## Conclusion

You've successfully implemented the buggy page and new-label feature in your Nuxt application. The new-label provides a distinctive visual cue for new features while maintaining the overall design aesthetic of your application.

Remember to update your translation files to include all the necessary text for the buggy tour page and ensure that the TwicPics integration is properly configured for image handling.
