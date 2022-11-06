<template>
  <div class="top-of-the-diamond-tour">
    <h1>Top Of The Diamond Tour</h1>
    <div class="content--wrapper">
      <section>
        <p>
          We start our “Top of the Diamond tour” from Anarstapi, a fishing
          village located on the south side of the peninsula close to
          Snæfellsjökull.
        </p>
        <p>
          Here we will hop on our vehicle and make our way to the foot of the
          glacier. Alternatively, you can follow our bus in your own car, if it
          is suitable for F-roads, as we drive a mountain pass along the side of
          the glacier. This gravel and bumpy F road offer spectacular views of
          the glacier and the surrounding area and it is a great part of this
          adventure. Therefor we do advise customers to start the journey with
          the bus so they can enjoy the scenery along the way.
        </p>
        <p>
          Up on arrival it is time for the real fun to begin. We get on board
          the snow-cat to start our ascent to the top of the glacier, or as
          close to it as possible. The snow-cats used for the tour are specially
          equipped so travellers can enjoy the scenery along the way.
        </p>
        <p>
          From here there is a vast and incredible panorama: Hellissandur, Rif,
          the bay Breiðafjörður, and as far as the West fjords (Látrabjarg
          cliffs). The mountain’s rugged terrain is also impressive, as is the
          view south encompassing all of the gulf of Faxaflói, to Reykjavík and
          even beyond to Keflavík. These excursions are always fascinating, and
          it is important for travellers to realize that views from the glacier
          are dependent upon local weather conditions at any given moment.
        </p>
        <p>
          Snæfellsjökull is 1446 meters above sea level it’s located at the edge
          of Snæfellsnes peninsula and is easily accessible. Besides its
          singular beauty, it boasts a tremendous energy level. it’s said to be
          one of the seven great energy centres of the earth and has been
          attributed to various mysterious powers. It has been a prominent theme
          of authors and inspired the composition of impressive works of
          literature.
        </p>
        <p>
          Worthy of mention is the story written by Nobel-prize winning author
          Halldór Laxness, “Christianity Under the Glacier,” which describes
          reintroduction of paganism into a small community and touches on the
          failures of Christianity in an amusing and edgy tail.
        </p>
        <p>
          Also in the science fiction classic, “Journey to the Center of the
          Earth,” which was published in 1864 by French author, Jules Verne,
          where the characters take on a hazardous journey that starts at a
          secret entrance on the glacier to a subterranean world at the centre
          of the earth, ending with emerging to the surface through a volcanic
          eruption on the south Italian island Stromboli.
        </p>
        <p>
          On 5th of November 1993 aliens wear supposed to land on
          Snæfellsjökull, A British man Michael Dillon believed he was contacted
          by the aliens with the message that they would land on this specific
          date and place, and this was backed up by visions that a woman had
          while she was abducted. This event did attract over 500 alien
          enthusiasts from around the world including a camera crew from CNN, to
          our knowledge no alien sighting was reported on that specific date in
          the area.
        </p>
      </section>
      <div class="bokun--container">
        <div
          class="bokunWidget"
          data-src="https://widgets.bokun.io/online-sales/a5fa0d8d-ffc2-431e-bece-86e5d8fa2d7c/experience-calendar/17979"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "snowCatTour",
});
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.top-of-the-diamond-tour {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  h1 {
    margin-bottom: 3rem;
  }
}

.content--wrapper {
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: $small-screen) {
    grid-template-columns: 50% 50%;
  }
  p {
    margin-top: 1rem;
  }
}

.bokun--container {
  // width: 250px;
}
</style>
