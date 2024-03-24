import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

function Buttons() {
  return (
    <AwesomeButton
      cssModule={AwesomeButtonStyles}
      type="primary"
      href="/c">
      Resume
    </AwesomeButton>
  );
}

export default Buttons;