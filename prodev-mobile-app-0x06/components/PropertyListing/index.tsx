import { View, Text } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { useState } from "react";
import { PropertyListing, PropertyListingProps } from "../../interfaces";

const PropertyListing = ({ listings }: PropertyListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing: PropertyListingProps, key: number) => (
  <PropertyListingCard {...listing} key={key} />
))}
    </View>
  );
};

export default PropertyListing;