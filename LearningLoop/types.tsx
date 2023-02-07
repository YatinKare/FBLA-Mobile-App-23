/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface TeacherParamList extends TeacherStackParamList {}
    interface ParentParamList extends ParentStackParamList {}
  }
}

export type RootStackParamList = {
//  Root: NavigatorScreenParams<RootTabParamList> | undefined;
//  Modal: undefined;
//  NotFound: undefined;
  Login: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type TeacherStackParamList = {
  Teacher: NavigatorScreenParams<TeacherTabParamList> | undefined;
}

export type ParentStackParamList = {
  Parent: NavigatorScreenParams<ParentTabParamList> | undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type TeacherStackScreenProps<Screen extends keyof TeacherTabParamList> = NativeStackScreenProps<
  TeacherTabParamList,
  Screen
>;

export type ParentStackScreenProps<Screen extends keyof ParentTabParamList> = NativeStackScreenProps<
  ParentTabParamList,
  Screen
>;

export type TeacherTabParamList = {
  Attendance: undefined;
  Announcements: undefined;
  Settings: undefined;
}

export type ParentTabParamList = {
  Upcoming: undefined;
  Photos: undefined;
  Settings: undefined;
}

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Calendar: undefined;
  Upcoming: undefined;
  Login: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type TeacherTabScreenProps<Screen extends keyof TeacherTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TeacherTabParamList, Screen>,
  NativeStackScreenProps<TeacherTabParamList>
>;

export type ParentTabScreenProps<Screen extends keyof ParentTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<ParentTabParamList, Screen>,
  NativeStackScreenProps<ParentTabParamList>
>;

