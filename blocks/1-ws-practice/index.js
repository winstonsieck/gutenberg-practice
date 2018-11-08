/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';
import Button from './Button';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register block
 */
export default registerBlockType(
    'globalcognition/static',
    {
        title: 'GC - Static Block',
        description: 'Demonstration of how to make a static call to action block.',
        category: 'common',
        icon: {
          background: 'rgba(254, 243, 224, 0.52)',
          src: icon,
        },        
        keywords: [
            'Banner',
            'CTA',
            'Shout Out',
        ],
        edit: () => {
            return (
                <div>
                    <p>{ 'GC custom block' }</p>
                </div>
            );
        },
        save: props => {

          return (
              <div>
                <h2>{ 'Front End Interaction' }</h2>
                <Button />
              </div>
          );
        },
    },
);
