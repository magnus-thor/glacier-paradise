<template>
  <div>
    <div class="twic-item landscape">
      <TwicImg src="/fra-breiduvik-cropped-2.jpg" alt="" refit anchor="right" />
    </div>

    <div class="content--wrapper">
      <div class="empty"></div>
      <div class="company-info">
        <h2>{{ $t("aboutUs.header") }}</h2>
        <h3>{{ $t("aboutUs.sub-header") }}</h3>
        <p>{{ $t("aboutUs.company") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.company-info {
  width: 85%;
}

.landscape {
  --twic-ratio: calc(3 / 1);
}

h2,
h3 {
  color: $yellow;
}

h2,
p {
  margin-top: 1rem;
}

p {
  font-size: 0.8rem;
  color: $white;
}

@include for-tablet-portrait-up {
  .landscape {
    --twic-ratio: calc(4 / 1);
  }
}

@include for-tablet-landscape-down {
  .company-info {
    margin: auto;
  }
}

@include for-tablet-landscape-up {
  .content--wrapper {
    display: flex;
  }

  .empty {
    width: 40%;
  }

  .company-info {
    padding-left: 2rem;
    width: 50%;
  }

  p {
    font-size: 1rem;
  }
}
</style>
