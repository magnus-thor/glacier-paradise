declare global {
  interface window {
    beam: () => void
    beholdWidgets: {
      initialize: () => void
    }
  }
}