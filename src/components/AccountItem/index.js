import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9f25bff2725098f7ef9c1a6d4250be56~c5_100x100.jpeg?x-expires=1653732000&x-signature=OdtYqcUwLJayml4Pa17UrE75hfE%3D"
        alt="hoa"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Nguyen van a
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Nguyen van a</span>
      </div>
    </div>
  );
}

export default AccountItem;
