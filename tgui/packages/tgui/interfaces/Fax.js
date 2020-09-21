<<<<<<< HEAD
import { useBackend } from '../backend';
import { Box, Button, LabeledList, NoticeBox, Section } from '../components';
import { Window } from '../layouts';
=======
import { Fragment } from 'inferno';
import { useBackend } from "../backend";
import { Box, Button, Collapsible, Icon, Input, LabeledList, NoticeBox, Section, Tabs } from "../components";
import { Window } from "../layouts";
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
import { LoginInfo } from './common/LoginInfo';
import { LoginScreen } from './common/LoginScreen';

export const Fax = (props, context) => {
  const { data } = useBackend(context);

<<<<<<< HEAD
  const { authenticated } = data;

  if (!authenticated) {
    return (
      <Window width={600} height={250} resizable>
=======
  const {
    authenticated,
  } = data;

  if (!authenticated) {
    return (
      <Window
        width={600}
        height={250}
        resizable>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
        <Window.Content>
          <RemoveItem />
          <LoginScreen />
        </Window.Content>
      </Window>
    );
  }

  return (
<<<<<<< HEAD
    <Window width={600} height={250} resizable>
=======
    <Window
      width={600}
      height={250}
      resizable>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
      <Window.Content>
        <RemoveItem />
        <LoginInfo />
        <FaxContent />
      </Window.Content>
    </Window>
  );
};

export const FaxContent = (props, context) => {
  const { act, data } = useBackend(context);

<<<<<<< HEAD
  const { bossName, copyItem, cooldown, destination } = data;

  return (
    <Section>
      {!!cooldown && <NoticeBox info>Transmitter arrays realigning. Please stand by.</NoticeBox>}
      <LabeledList>
        <LabeledList.Item label="Network">{bossName} Quantum Entanglement Network</LabeledList.Item>
      </LabeledList>
      {(copyItem && (
        <Box mt={1}>
          <LabeledList>
            <LabeledList.Item label="Currently Sending">{copyItem}</LabeledList.Item>
            <LabeledList.Item label="Sending To">
              <Button icon="map-marker-alt" content={destination} onClick={() => act('dept')} />
            </LabeledList.Item>
          </LabeledList>
          <Button icon="share-square" onClick={() => act('send')} content="Send" fluid />
        </Box>
      )) || <Box mt={1}>Please insert item to transmit.</Box>}
=======
  const {
    bossName,
    copyItem,
    cooldown,
    destination,
  } = data;

  return (
    <Section>
      {!!cooldown && (
        <NoticeBox info>
          Transmitter arrays realigning. Please stand by.
        </NoticeBox>
      )}
      <LabeledList>
        <LabeledList.Item label="Network">
          {bossName} Quantum Entanglement Network
        </LabeledList.Item>
      </LabeledList>
      {copyItem && (
        <Box mt={1}>
          <LabeledList>
            <LabeledList.Item label="Currently Sending">
              {copyItem}
            </LabeledList.Item>
            <LabeledList.Item label="Sending To">
              <Button
                icon="map-marker-alt"
                content={destination}
                onClick={() => act("dept")} />
            </LabeledList.Item>
          </LabeledList>
          <Button
            icon="share-square"
            onClick={() => act("send")}
            content="Send"
            fluid />
        </Box>
      ) || (
        <Box mt={1}>
          Please insert item to transmit.
        </Box>
      )}
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
    </Section>
  );
};

const RemoveItem = (props, context) => {
  const { act, data } = useBackend(context);

<<<<<<< HEAD
  const { copyItem } = data;
=======
  const {
    copyItem,
  } = data;
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale

  if (!copyItem) {
    return null;
  }

  return (
    <Box>
<<<<<<< HEAD
      <Button fluid icon="eject" onClick={() => act('remove')} content="Remove Item" />
    </Box>
  );
};
=======
      <Button
        fluid
        icon="eject"
        onClick={() => act("remove")}
        content="Remove Item" />
    </Box>
  );
};
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
