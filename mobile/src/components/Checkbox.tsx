import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

interface CheckboxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: CheckboxProps){
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='flex-row mb-2 items-center'
      {...rest}
    >
      {
        checked
        ?
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />
        </View>
        :
        <View className="h-8 w-8 bg-zinc-900 rounded-lg"></View>
      }

      <Text className="text-white text-base ml-3">
        {title}
      </Text>
    </TouchableOpacity>
  )
}