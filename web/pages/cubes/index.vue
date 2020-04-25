<template>
  <section class="container">
    <h1 class="title">Cubes</h1>
    <p>number of cubes: {{ numberOfCubes }}</p>
    <p>
      starting coordinates:
      [
        {{startingGridPoint.row}},
        {{startingGridPoint.column}}
      ]
    </p>
    <p>
      grid: {{gridWidth}} ⨉ {{gridHeight}}
    </p>
    <ul class="cubes">
      <li
        v-for="cube in cubes"
        :key="cube._id"
        class="cube"
        :data-coordinates="`x: ${cube.x} y: ${cube.y}`"
        :style="
          `grid-column: ${startingGridPoint.column + cube.y - cube.x} / span 2;
          grid-row: ${startingGridPoint.row - cube.y - cube.x} / span 4`
        "
      >
        <SanityImage
          :width="267"
          :height="308"
          :image="cube.image"
          class="avatar"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'

const query = groq`
  {
    "cubes": *[_type == "cube"]
  }
`

export default {
  components: {
    SanityImage
  },
  computed: {
    numberOfCubes() {
      return this.cubes.length
    },
    gridWidth() {
      return Math.sqrt(this.numberOfCubes) * 2
    },
    gridHeight() {
      return Math.sqrt(this.numberOfCubes) * 2 + 2
    },
    startingGridPoint() {
      return {
        column: this.gridWidth / 2,
        row: this.gridHeight - 1
      }
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

<style scoped>
@import '../../styles/custom-properties.css';

.container {
  text-align: center;
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.cubes {
  display: grid;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 32em;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
}

.cube {
  display: block;
  position: relative;
}

.avatar {
  max-width: 100%;
}
</style>
