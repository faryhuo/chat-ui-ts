import React from 'react';
import { Select, Button, Segmented, Popconfirm, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSearch } from '@fortawesome/free-solid-svg-icons';
import RoleSelector from '../role-selector/RoleSelector';
import chatConfig from "../../store/ChatConfig";
import './SessionActionList.css';
import { useState } from 'react';
type IProps = {
  config: IAppConfig;
  store: IMessage;
  onOpen?: () => void;
}
const SessionAtcionList: React.FC<IProps> = observer(({ store, config, onOpen }) => {

  const { t } = useTranslation();
  const [moreModules, setMoreModules] = useState(false);
  const options = [
    t('Precise'),
    t('Balanced'),
    t('Creative')
  ];


  const roleList: any[] = [{ label: "", value: "" }];
  store.roleData.allRoles.forEach(item => {
    roleList.push({
      label: item.roleName,
      value: item.roleId
    });
  })
  const clear = (e: any) => {
    store.clear(store.activeSession);
    e.stopPropagation();
  }


  const getSelectedItem = () => {
    const apiConfig = store.chatApiConfig;
    if (apiConfig.temperature > 0.7) {
      return options[2];
    } else if (apiConfig.temperature < 0.5) {
      return options[0];
    } else {
      return options[1];
    }
  }

  const getModulesDataSource = () => {
    if (moreModules) {
      return chatConfig.chatModelList;
    } else {
      return chatConfig.sampleChatModelList;
    }
  }

  const changeType = (e: any) => {
    const index = options.indexOf(e);
    const temperatureList = [0, 0.6, 1];
    if (index >= 0) {
      store.setChatApiConfig("temperature", temperatureList[index]);
    }
  }

  const getActionButtonList = () => {
    const list = [];
    if (store.type === 'chat') {
      list.push(<Button className="option-btn" key={1} onClick={onOpen}>{t("More")}</Button>);
      !config.isMobile && list.push(<Segmented key={2} value={getSelectedItem()} onChange={changeType} style={{ marginRight: 10 }} options={options} />);
      list.push(<RoleSelector key={3} store={store} roleList={roleList}></RoleSelector>);
      list.push(<Select key={4} style={{ width: 180 }}
        className="option-btn" onChange={(e) => store.setChatApiConfig("model", e)}
        options={getModulesDataSource()}
        value={store.chatApiConfig.model}
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: '8px 0' }} />
            <Button onClick={() => setMoreModules(!moreModules)} style={{ width: '100%' }} icon={<FontAwesomeIcon
              icon={faSearch} />} type="text">
              &nbsp;{t<string>(!moreModules ? "All" : "Main")}
            </Button>
          </>)}
      />);
    }
    list.push(<Popconfirm
      key={6}
      placement="bottom"
      title={t('Message')}
      description={t('Are you want to delete the chat.')}
      onConfirm={(e) => clear(e)}
      okText={t<string>("Yes")}
      cancelText={t<string>("No")}
    >
      <Button
        icon={<FontAwesomeIcon icon={faTrashCan} />} size="small" />
    </Popconfirm>
    )
    return list;
  }



  return (<div className="session-action-list-wrapper">
    {getActionButtonList()}
  </div>)
})

export default SessionAtcionList;