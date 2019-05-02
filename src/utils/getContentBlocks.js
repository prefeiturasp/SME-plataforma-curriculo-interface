import React, { Component } from 'react';
import ModuleExercise from 'views/modules/ModuleExercise';
import ModuleGallery from 'views/modules/ModuleGallery';
import ModuleLongText from 'views/modules/ModuleLongText';
import ModuleQuestion from 'views/modules/ModuleQuestion';
import ModuleStudent from 'views/modules/ModuleStudent';
import ModuleTextWithTables from 'views/modules/ModuleTextWithTables';
import ModuleTeacher from 'views/modules/ModuleTeacher';
import convertQuillToHtml from 'utils/convertQuillToHtml';

export default function getContentBlocks(list) {
  return list.map((block, i) => {
    switch (block.type) {
      case 'to_teacher':
        return (
          <ModuleTeacher
            key={i}
            text={convertQuillToHtml(block.content.body)}
          />
        );

      case 'to_student':
        return (
          <ModuleStudent
            key={i}
            text={convertQuillToHtml(block.content.body)}
          />
        );

      case 'question':
        return (
          <ModuleQuestion
            key={i}
            number={block.content.number}
            title={block.content.title}
            text={convertQuillToHtml(block.content.body)}
          />
        );

      case 'predefined_exercise':
        return (
          <ModuleExercise
            key={i}
            icon={block.content.icon_url}
            title={block.content.title}
            text={convertQuillToHtml(block.content.body)}
          />
        );

      case 'long_text':
        return (
          <ModuleLongText
            key={i}
            title={block.content.title}
            text={convertQuillToHtml(block.content.body)}
          />
        );

      case 'gallery':
        return <ModuleGallery key={i} images={block.images} />;

      default:
        return <ModuleTextWithTables key={i} data={block.content.body} />;
    }
  });
}
