import { Text, View } from 'react-native';
import { render } from '@testing-library/react-native';

const Component = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

describe('basic component test', () => {
  it('component test should work', () => {
    const { getByText } = render(<Component name="Test" />);

    expect(getByText('Test')).toBeDefined();
  });
});