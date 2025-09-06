import PropertyListing from "../../components/PropertyListing";
import { styles } from "../../styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "../../constants/data";
import { PropertyListingProps } from "../../interfaces";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Filters */}
      <View style={{ height: 72, backgroundColor: "white" }}>
        <FlatList
          data={FILTERS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.filterContainer}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>

      {/* Listings */}
      <FlatList
        style={styles.listingContainer}
        data={SAMPLE_DATA}
        keyExtractor={(item: PropertyListingProps, index) => index.toString()}
        renderItem={({ item }) => <PropertyListing listings={[item]} />}
        ListFooterComponent={() => (
          <View style={styles.paginationContainer}>
            <TouchableHighlight
              style={styles.showMoreButton}
              underlayColor="#ddd"
              onPress={() => console.log("Show more pressed")}
            >
              <Text style={styles.showMoreButtonText}>Show more</Text>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
