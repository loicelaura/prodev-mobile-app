import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  searchGroup: { padding: 16 },
  searchFormGroup: { flexDirection: "row", alignItems: "center" },
  searchControlGroup: { flex: 1 },
  searchFormText: { fontSize: 16, color: "#333" },
  searchControl: { borderBottomWidth: 1, borderColor: "#ccc", padding: 8 },
  searchButton: { backgroundColor: "#34967C", padding: 12, borderRadius: 8 },
  filterGroup: { flexDirection: "row", gap: 12, paddingHorizontal: 16 },
  filterContainer: { alignItems: "center", justifyContent: "center", width: 80 },
  listingContainer: { padding: 16 },
  paginationContainer: { padding: 16, alignItems: "center" },
  showMoreButton: { backgroundColor: "#34967C", padding: 12, borderRadius: 8 },
  showMoreButtonText: { color: "#fff", fontSize: 16 },
});

export { styles };