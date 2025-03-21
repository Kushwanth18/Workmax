import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Header from "./Header";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const log = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Send form data to backend here.
  };
  return (
    <View className="flex-col items-center bg-[#313638] min-h-full">
      <Header />
      <View className="flex-row justify-start">
        <Text className="text-[#E8E9EB] " >Date: 21.03.2025</Text>
      </View>
      <View className="flex-col bg-[#379392] p-10 mt-5 border rounded-3xl">
        <View className="flex-row justify-center items-center">
          <Text className="text-[#E8E9EB] ">Name:</Text>
          <TextInput
            className="text-[#E8E9EB]"
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
            placeholder="Enter your workout name"
          />
        </View>
        <Text>Email:</Text>
        <TextInput
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text>Message:</Text>
        <TextInput
          value={formData.message}
          onChangeText={(text) => handleChange("message", text)}
          placeholder="Enter your message"
          multiline
          numberOfLines={4}
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default log;
