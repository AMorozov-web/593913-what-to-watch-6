import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthInfo, selectAuthStatus} from '../../store/reducers/user/selectors';
import {redirectToRoute} from '../../store/middleware/action';
import {AppRoute, AuthorizationStatus} from '../../consts';

const UserBlock = () => {
  const authorizationStatus = useSelector(selectAuthStatus);
  const authInfo = useSelector(selectAuthInfo);
  const dispatch = useDispatch();

  const handleAvatarClick = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(AppRoute.MY_LIST));
  };
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(AppRoute.LOGIN));
  };

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ?
        <div className="user-block__avatar">
          <img src={authInfo[`avatar_url`]} alt="User avatar" width={63} height={63} onClick={handleAvatarClick}/>
        </div>
        :
        <a href="sign-in.html" className="user-block__link" onClick={handleLinkClick}>Sign in</a>
      }
    </div>
  );
};

export {UserBlock};
