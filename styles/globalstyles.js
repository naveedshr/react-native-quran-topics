import { StyleSheet } from "react-native"

export const mystyles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#5f7e78',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Noto-Regular',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  reference: {
    fontSize: 12,
    color: '#969696',
    fontWeight: '700',
  },
  arabicText: {
    fontFamily: 'arabic4',
    fontSize: 24,
    textAlign: 'right',
    color: '#b83021',
  },
  englishText: {
    fontFamily: 'Open-Sans',
    fontSize: 14,
    marginVertical: 10,
    color: '#303030',
  },
  urduText: {
    fontFamily: 'Noto-Regular',
    fontSize: 14,
    textAlign: 'right',
    color: '#303030',
  },
})