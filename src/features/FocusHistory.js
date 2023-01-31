import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory =({history})=>{
  if (!history || !history.length) return <Text style={styles.title2}>Đã làm cái mẹ gì đâu???</Text>;
  const renderItem=({item}) => <Text style={styles.item}>- {item}</Text>
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Những thứ đã làm:</Text>
    <FlatList
    data={history}
    renderItem={renderItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   padding: spacing.lg,
   flex: 1,
  },

  item: {
    fontSize: fontSizes.lg,
    color: colors.white,
    paddingTop: spacing.md,

  },

  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
    title2: {
    padding: spacing.lg,
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  }
})