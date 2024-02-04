import * as React from 'react';
import {View, Image, SafeAreaView, Text,} from 'react-native';
import {PageSpace} from '../../components/pageSpace';
import styles from './style';
import {Constants} from '../../util/constants';
import RadioButton from '../../components/radioButton';
import AppHeader from '../../components/appHeader';
const AddNotes = props => {
  const [filter, setFilter] = React.useState(Constants.radioButton);

  const deleteNotes = () => {
    props.navigation.navigate('DeleteNotes');
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  const onPress=(item)=>{
    const updateFilter = filter.map((item1) => {
      if (item.id === item1.id) {
        item1.isSelected = true;
        return item1;
      } else {
        item1.isSelected = false;
        return item1;
      }
    });
    setFilter(updateFilter);
  }
  return (
    <SafeAreaView>
      <View>
        <AppHeader
          leftIcon={'left'}
          rightIcon={'delete'}
          onClickRightIcon={deleteNotes}
          onClickLeftIcon={goBack}
        />
        <View style={{padding: 25}}>
          <Text style={styles.label}>{Constants.addNotes.label}</Text>
          <PageSpace size={20} />
          <Text style={styles.date}>{Constants.addNotes.date}</Text>
          <PageSpace size={30} />
          <Text style={styles.descreption}>
            {Constants.addNotes.descreption}
          </Text>
          <PageSpace size={35} />
          {filter.map((data, key) => {
            return <RadioButton data={data} index={key} onPress={()=>onPress(data)} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNotes;
