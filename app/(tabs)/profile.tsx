import seed from "@/lib/seed";
import { View, Text, Button } from "react-native";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Seed"
        onPress={async () => {
          try {
            await seed();
            console.log("Seed successful ✅");
          } catch (e) {
            console.error("Seed failed ❌", e);
          }
        }}
      />
    </View>
  );
};
export default Profile;
