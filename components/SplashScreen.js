import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulando carregamento, depois navega para a próxima tela
    setTimeout(() => {
      navigation.replace('Identification');
    }, 2000); // 2 segundos
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Svg
        width="56"
        height="66"
        viewBox="0 0 56 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {/* Substitua "M12 2L2 7h20L12 2z" pelo Path do seu ícone SVG */}
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.054 26.0004C43.235 26.0004 46.3774 25.4342 49.3334 24.3407C51.5765 23.511 54.2228 24.174 55.4208 26.218C56.6188 28.262 55.9153 30.9029 53.7083 31.8218C49.4012 33.6151 44.7593 34.5475 40.054 34.5475C33.8976 34.5475 27.8497 32.9512 22.5181 29.919C17.1865 26.8868 12.7591 22.5256 9.68085 17.2738C7.32823 13.2598 5.82707 8.83371 5.25009 4.26275C4.95444 1.92057 6.92448 -3.75287e-07 9.32052 0C11.7166 3.75287e-07 13.6226 1.92598 14.0147 4.25438C14.5313 7.32274 15.6047 10.2866 17.1952 13.0002C19.5119 16.9528 22.8439 20.235 26.8565 22.517C30.8691 24.799 35.4207 26.0004 40.054 26.0004Z"
          fill="#7B2CBF"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.1544 48.5753C13.0819 49.3863 10.1953 50.7344 7.62734 52.5442C5.67868 53.9175 2.94836 53.9518 1.2541 52.2828C-0.440163 50.6139 -0.454527 47.8837 1.43584 46.4334C5.12505 43.6031 9.36377 41.519 13.9087 40.3194C19.8553 38.7499 26.1166 38.7499 32.0633 40.3194C38.0099 41.889 43.4323 44.9728 47.7856 49.261C51.1127 52.5383 53.7257 56.4309 55.484 60.699C56.385 62.886 54.9867 65.2434 52.6723 65.8543C50.3579 66.4651 48.0107 65.0907 47.0202 62.9416C45.715 60.1095 43.8994 57.5203 41.6501 55.3047C38.3739 52.0774 34.293 49.7565 29.8175 48.5753C25.3421 47.394 20.6299 47.394 16.1544 48.5753Z"
          fill="#7B2CBF"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default SplashScreen;
