/*
This is not currently used, may need additional dependency

import React from 'react';
import PropTypes from 'prop-types';
import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertFromHTML,
} from 'draft-js';
import EditorMenu from '../Shared/EditorMenu';
import { stateToHTML } from 'draft-js-export-html';

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(this.createEditorState(props)),
      hasBeenChanged: false,
    };

    this.text = this.props.text;
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState, cbFn = false) => {
      this.setState({ editorState, hasBeenChanged: true }, () => {
        const newText = stateToHTML(editorState.getCurrentContent());
        if (newText !== this.text) {
          const name = this.props.name || null;
          this.text = newText;
          this.props.onTextChange(newText, name);
        }
        if (cbFn) {
          cbFn();
        }
      });
    };

    this.handleKeyCommand = command => this._handleKeyCommand(command);
    this.onTab = e => this._onTab(e);
    this.toggleBlockType = type => this._toggleBlockType(type);
    this.toggleInlineStyle = style => this._toggleInlineStyle(style);
  }

  createEditorState(props) {
    const blocksFromHTML = convertFromHTML(props.text);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    return state;
  }

  componentWillReceiveProps(props) {
    if (this.state.hasBeenChanged === false) {
      this.setState({
        editorState: EditorState.createWithContent(
          this.createEditorState(props)
        ),
      });
    }
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
      () => {
        this.focus();
      }
    );
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="RichEditor">
        <EditorMenu
          onToggleFn={this.toggleInlineStyle.bind(this)}
          editorState={editorState}
        />
        <div onClick={this.focus}>
          <Editor
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

RichEditor.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default RichEditor;
*/
