/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList, TeacherStackParamList } from '../types';
import { TeacherTabParamList } from '../types';
import { ParentTabParamList } from '../types';



export const teacherlinking: LinkingOptions<TeacherStackParamList> = {
  prefixes: [Linking.createURL('/Teacher/')],
  config: {
    screens: {
      Teacher: {
        screens: {
          Announcements: {
            screens: {
              AnnouncementsScreen: 'Announcements,'
            }
          },
          Attendance: {
            screens: {
              AttendanceScreen: 'Attendance',
            }
          }
        },
      }
    }
  }

}

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Calendar: {
            screens: {
              CalendarScreen: 'Calendar',
            }
          },
          Upcoming: {
            screens: {
              UpcomingScreen: 'Upcoming',
            }
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
      Login: 'login',
    },
  },
};

