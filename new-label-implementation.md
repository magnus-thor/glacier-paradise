# New-Label Feature Implementation Guide for Nuxt

This guide provides detailed instructions for implementing the "New" label feature on cards in your Nuxt application, creating a distinctive visual indicator for new features.

## Table of Contents

1. [Overview](#overview)
2. [Design Requirements](#design-requirements)
3. [Implementation Steps](#implementation-steps)
4. [Advanced Styling](#advanced-styling)
5. [Responsive Behavior](#responsive-behavior)
6. [Testing](#testing)

## Overview

The "New" label feature adds a distinctive corner label to cards that represent new features or content. This visual indicator helps users quickly identify what's new in your application while maintaining an aesthetically pleasing design.

## Design Requirements

The new-label should have the following characteristics:

1. **Positioning**:
   - On small screens: Positioned on the left side of the card (since the border-radius is on the right)
   - On large screens: Always on the opposite side of the alternating border-radius

2. **Visual Design**:
   - Diagonal orientation over the corner
   - Shorter in length than standard labels
   - Red, glossy background with white text
   - Distinctive corner border

3. **Animation**:
   - Subtle pulse animation to draw attention without being distracting

## Implementation Steps

### 1. Create or Update the Card Component

In your card component (e.g., `components/HomeCard.vue`), add the new-label feature:

```vue
<template>
  <div :class="[
    'tour',
    { 'row-reverse': reverseFlow },
    { 'custom-tours': cardIndex === 2 },
    { cabin: cardIndex === 3 },
    { buggy: cardIndex === 4 },
  ]">
    <div :class="['tour--image', { 'border-reverse': reverseFlow }]">
      <TwicImg class="twic-image" :src="getImageSrc" :alt="image.alt" />
      <div v-if="isNew" class="new-label">New</div>
    </div>
    <!-- Rest of the card content -->
  </div>
</template>

<script setup>
import { computed } from 'vue';

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
```

### 2. Add the CSS for the New-Label

Add the following CSS to your component's `<style>` section:

```scss
<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.tour {
  // Existing tour styles...

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

    /* New-label styling */
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
    }
  }

  /* Responsive styles */
  @include for-tablet-landscape-up {
    flex-direction: row;
    max-width: 1024px;

    &.row-reverse {
      flex-direction: row-reverse;
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
        }
      }
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
</style>
```

### 3. Update the Cards Container Component

Make sure your cards container component passes the `isNew` property to the card component:

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
      />
    </template>
  </div>
</template>
```

### 4. Update Your Card Data

In your card data (e.g., `assets/tours-info/home-cards-info.js`), add the `isNew` property to cards that should display the new-label:

```javascript
export const cardsInfo = [
  {
    imageSrc: "images/buggy_card_image_1.jpg",
    imageAlt: "home.tours.buggy.imageAlt",
    cardHeader: "home.tours.buggy.header",
    cardText: "home.tours.buggy.text",
    cardAdditionalText: "home.tours.buggy.additionalText",
    linkText: "shared.links.readMore",
    linkHref: "/tours/buggy",
    isNew: true, // This card will display the new-label
  },
  // Other cards...
];
```

## Advanced Styling

### 1. Add a Glossy Effect

To enhance the glossy appearance of the new-label, you can add a shine effect:

```scss
.new-label {
  /* Existing styles... */
  
  /* Add glossy effect */
  background: linear-gradient(
    to right,
    #e63946 0%,
    #ff5a5f 25%,
    #ff5a5f 50%,
    #e63946 100%
  );
  background-size: 200% auto;
  animation: pulse 2s infinite, shine 3s linear infinite;
}

@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

### 2. Add Ribbon Ends

To create a more ribbon-like appearance, you can add pseudo-elements:

```scss
.new-label {
  /* Existing styles... */
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #b52c37; /* Darker shade for shadow effect */
  }
  
  &::before {
    top: 0;
    left: -10px;
    border-top-right-radius: 10px;
  }
  
  &::after {
    bottom: -10px;
    right: 0;
    border-top-left-radius: 10px;
  }
}
```

## Responsive Behavior

The new-label has different positioning based on screen size and card layout:

1. **Small Screens (Mobile)**:
   - All new-labels appear on the left side of the card
   - This is because the border-radius is consistently on the right side on mobile

2. **Large Screens (Tablet and Desktop)**:
   - For even-indexed cards (cardIndex is even), the new-label appears on the right
   - For odd-indexed cards (cardIndex is odd), the new-label appears on the left
   - This ensures the label is always on the opposite side of the alternating border-radius

This responsive behavior is handled by the CSS media queries and the `border-reverse` class.

## Testing

To ensure your new-label feature works correctly across different devices and scenarios:

### 1. Visual Testing

Create a test page that displays cards with and without the new-label:

```vue
<template>
  <div class="test-container">
    <h1>New-Label Test</h1>
    <div class="test-cards">
      <HomeCard 
        v-for="(isNewValue, index) in [true, false, true, false]" 
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
```

### 2. Responsive Testing Checklist

- [ ] New-label is visible and properly positioned on mobile devices
- [ ] New-label is on the left side for small screens
- [ ] On large screens, new-label is on the opposite side of the alternating border-radius
- [ ] New-label text is readable at all screen sizes
- [ ] Animation effects are subtle and not distracting
- [ ] Card layout adjusts properly between mobile and desktop views

## Conclusion

You've successfully implemented the new-label feature for cards in your Nuxt application. This feature provides a distinctive visual indicator for new content while maintaining an aesthetically pleasing design that works across all screen sizes.
