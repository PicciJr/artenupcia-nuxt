<template>
  <div class="flex flex-wrap">
    <div v-for="badge in badgeItems" :key="badge.id" class="pr-2">
      <BadgeTag
        :badge="badge"
        :color="badgeColors"
        @click="handleBadgeClicked"
      />
    </div>
  </div>
</template>

<script>
import BadgeTag from '@/components/BadgeTag'
export default {
  components: {
    BadgeTag
  },
  props: {
    badgeItems: {
      type: Array,
      default() {
        return [
          {
            idBadge: 0,
            badgeText: 'Filtro 1'
          },
          {
            idBadge: 1,
            badgeText: 'Filtro 2'
          },
          {
            idBadge: 3,
            badgeText: 'Filtro 3'
          }
        ]
      }
    },
    badgeColors: {
      type: String,
      default: 'blue'
    }
  },
  methods: {
    handleBadgeClicked(idBadge) {
      this.badgeItems[this.getBadgeById(idBadge)].isActive = !this.badgeItems[
        this.getBadgeById(idBadge)
      ].isActive
    },
    getBadgeById(idBadge) {
      return this.badgeItems.findIndex(badge => badge.idBadge === idBadge)
    }
  }
}
</script>
