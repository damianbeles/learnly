import { Image, Text, View } from 'react-native-ui-lib';
import { Colors } from '../constants/colors';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { PIC_URL } from '../constants/axios';

const QuestionType = {
  IMAGE: 'IMAGE',
  COLOR: 'COLOR',
  NUMBER: 'NUMBER',
};

const Answer = {
  1: 'answer1',
  2: 'answer2',
  3: 'answer3',
  4: 'answer4',
};

export function QuizScreen({ navigation, route }) {
  const kid = route.params.child;
  const quiz = route.params.quiz;
  const questions = quiz.questions.data;

  const [selected, setSelected] = useState(-1);
  const [currentQ, setCurrentQ] = useState(0);

  const question = questions[currentQ].attributes;

  const selectAnswer = answer => {
    if (answer === selected) {
      if (currentQ !== questions.length - 1) setCurrentQ(q => q + 1);
      else {
        (async () => {
          axios.put(`/children/${kid.id}`, {
            data: {
              lastCompletedQuiz: kid.attributes.lastCompletedQuiz + 1,
            },
          });
        })();
        navigation.replace('CongratsScreen');
      }
    }
    setSelected(answer);
  };

  return (
    <View flex bg-cerulean padding-56>
      <View flex bg-white br60 padding-20>
        <Text title center>
          {quiz.title}
        </Text>
        <View flex row>
          <View flex padding-30 paddingH-60>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => selectAnswer(1)}>
              <View
                flex
                br60
                center
                style={{
                  borderWidth: 6,
                  borderColor: selected === 1 ? Colors.black : Colors.alto,
                  ...(question.type === QuestionType.COLOR
                    ? { backgroundColor: question[Answer[1]].split(',')[1] }
                    : {}),
                }}>
                {question.type === QuestionType.NUMBER && (
                  <Text answer>{question[Answer[1]]}</Text>
                )}
                {question.type === QuestionType.IMAGE && (
                  <Image
                    source={{
                      uri:
                        PIC_URL +
                        question[`${Answer[1]}Pic`].data.attributes.url,
                    }}
                    height="100%"
                    width="100%"
                    resizeMode="contain"
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View flex padding-30 paddingH-60>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => selectAnswer(2)}>
              <View
                flex
                br60
                center
                style={{
                  borderWidth: 6,
                  borderColor: selected === 2 ? Colors.black : Colors.alto,
                  ...(question.type === QuestionType.COLOR
                    ? { backgroundColor: question[Answer[2]].split(',')[1] }
                    : {}),
                }}>
                {question.type === QuestionType.NUMBER && (
                  <Text answer>{question[Answer[2]]}</Text>
                )}
                {question.type === QuestionType.IMAGE && (
                  <Image
                    source={{
                      uri:
                        PIC_URL +
                        question[`${Answer[2]}Pic`].data.attributes.url,
                    }}
                    height="100%"
                    width="100%"
                    resizeMode="contain"
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View flex row>
          <View flex padding-30 paddingH-60>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => selectAnswer(3)}>
              <View
                flex
                br60
                center
                style={{
                  borderWidth: 6,
                  borderColor: selected === 3 ? Colors.black : Colors.alto,
                  ...(question.type === QuestionType.COLOR
                    ? { backgroundColor: question[Answer[3]].split(',')[1] }
                    : {}),
                }}>
                {question.type === QuestionType.NUMBER && (
                  <Text answer>{question[Answer[3]]}</Text>
                )}
                {question.type === QuestionType.IMAGE && (
                  <Image
                    source={{
                      uri:
                        PIC_URL +
                        question[`${Answer[3]}Pic`].data.attributes.url,
                    }}
                    height="100%"
                    width="100%"
                    resizeMode="contain"
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View flex padding-30 paddingH-60>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => selectAnswer(4)}>
              <View
                flex
                br60
                center
                style={{
                  borderWidth: 6,
                  borderColor: selected === 4 ? Colors.black : Colors.alto,
                  ...(question.type === QuestionType.COLOR
                    ? { backgroundColor: question[Answer[4]].split(',')[1] }
                    : {}),
                }}>
                {question.type === QuestionType.NUMBER && (
                  <Text answer>{question[Answer[4]]}</Text>
                )}
                {question.type === QuestionType.IMAGE && (
                  <Image
                    source={{
                      uri:
                        PIC_URL +
                        question[`${Answer[4]}Pic`].data.attributes.url,
                    }}
                    height="100%"
                    width="100%"
                    resizeMode="contain"
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
