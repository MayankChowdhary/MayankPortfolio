import angular from '/public/svg/skills/angular.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import django from '/public/svg/skills/django.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import flutter from '/public/svg/skills/flutter.svg';
import gimp from '/public/svg/skills/gimp.svg';
import git from '/public/svg/skills/git.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import materialui from '/public/svg/skills/materialui.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import php from '/public/svg/skills/php.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import react from '/public/svg/skills/react.svg';
import swift from '/public/svg/skills/swift.svg';
import dagger from '/public/png/skills/dagger.png';
import astudio from '/public/svg/skills/android-studio.svg';
import jetpack from '/public/png/skills/jetpack.png';
import sqlite from '/public/png/skills/sqlite.png';
import rxandroid from '/public/png/skills/rxjava.png';
import compose from '/public/png/skills/compose.png';
import bloc from '/public/png/skills/bloc.png';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'dart':
      return dart;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;

    case 'php':
      return php;
    case 'python':

    case 'swift':
      return swift;

    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'materialui':
      return materialui;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'dagger hilt':
      return dagger;
    case 'android studio':
      return astudio;
    case 'jetpack':
      return jetpack;
    case 'sqlite':
      return sqlite;
    case 'rx android':
      return rxandroid;
    case 'compose':
      return compose;
    case 'bloc-cubit':
      return bloc;
    default:
      break;
  }
}
