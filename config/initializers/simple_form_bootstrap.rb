# frozen_string_literal: true
# Use this setup block to configure all options available in SimpleForm.
SimpleForm.setup do |config|
  config.error_notification_class = 'alert alert-danger'
  config.button_class = 'btn btn-default'
  config.boolean_label_class = nil

  config.wrappers :vertical_form,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'control-label'

    b.use :input, class: 'form-control'
    b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  config.wrappers :vertical_file_input,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :readonly
    b.use :label, class: 'control-label'

    b.use :input
    b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  config.wrappers :vertical_boolean,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly

    b.wrapper tag: 'div', class: 'checkbox' do |ba|
      ba.use :label_input
    end

    b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  config.wrappers :vertical_radio_and_checkboxes,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'control-label'
    b.use :input
    b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  config.wrappers :horizontal_form,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'col-sm-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-9' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
      ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
    end
  end

  config.wrappers :horizontal_file_input,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :readonly
    b.use :label, class: 'col-sm-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-9' do |ba|
      ba.use :input
      ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
      ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
    end
  end

  config.wrappers :horizontal_boolean,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly

    b.wrapper tag: 'div', class: 'col-sm-offset-3 col-sm-9' do |wr|
      wr.wrapper tag: 'div', class: 'checkbox' do |ba|
        ba.use :label_input
      end

      wr.use :error, wrap_with: { tag: 'span', class: 'help-block' }
      wr.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
    end
  end

  config.wrappers :horizontal_radio_and_checkboxes,
                  tag: 'fieldset',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly

    b.wrapper tag: 'div', class: 'form-group' do |ba|
      ba.use :label, class: 'col-sm-2 control-label'
      ba.wrapper tag: 'div', class: 'col-sm-6' do |bc|
        bc.use :input, class: 'form-control'
        bc.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
        bc.use :error, wrap_with: { tag: 'span', class: 'help-block error' }
      end
    end
  end

  config.wrappers :inline_form,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'sr-only'

    b.use :input, class: 'form-control'
    b.use :error, wrap_with: { tag: 'span', class: 'help-block' }
    b.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
  end

  config.wrappers :multi_select,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'control-label'
    b.wrapper tag: 'div', class: 'form-inline' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
      ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
    end
  end

  config.wrappers :centric_input,
                  tag: 'div',
                  class: 'mda-form-control',
                  error_class: 'error' do |b|
    b.use :html5
    b.use :input, class: 'form-control'
    b.use :error, wrap_with: { tag: 'span', class: 'help-block error' }
    b.wrapper tag: 'div', class: 'mda-form-control-line' do |ba|
    end
    b.use :label
  end

  config.wrappers :centric_basic,
                  tag: 'fieldset',
                  error_class: 'error' do |b|
    b.use :html5
    b.wrapper tag: 'div', class: 'form-group' do |ba|
      ba.use :label, class: 'col-sm-2 control-label'
      ba.wrapper tag: 'div', class: 'col-sm-6' do |bc|
        bc.use :input, class: 'form-control'
        bc.use :error, wrap_with: { tag: 'span', class: 'help-block error' }
        bc.use :hint, wrap_with: { tag: 'div', class: 'help-block ' }
      end
    end
  end

  config.wrappers :centric_checkbox,
                  tag: 'fieldset',
                  error_class: 'error' do |b|
    b.use :html5
    b.wrapper tag: 'div', class: 'form-group' do |ba|
      ba.use :label, class: 'col-sm-2 control-label'
      ba.wrapper tag: 'div', class: 'col-sm-6' do |bc|
        bc.use :input
        bc.use :error, wrap_with: { tag: 'span', class: 'help-block error' }
      end
    end
  end

  config.wrappers :centric_radio,
                  tag: 'fieldset', error_class: 'error' do |b|
    b.use :html5
    b.wrapper tag: 'div', class: 'form-group' do |ba|
      ba.use :label, class: 'col-sm-2 control-label'
      ba.wrapper tag: 'div', class: 'col-sm-10' do |bc|
        bc.use :input, wrap_with: {
          tag: 'label',
          class: 'radio-inline c-radio'
        }
        bc.use :error, wrap_with: { tag: 'span', class: 'help-block error' }
      end
    end
  end

  config.wrappers :simple, error_class: 'error' do |b|
    b.use :html5
    b.use :input, class: 'form-control'
    b.use :error, wrap_with: { tag: 'span', class: 'help-block error' }
  end

  config.wrappers :horizontal_input_group,
                  tag: 'div',
                  class: 'form-group',
                  error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-9' do |ba|
      ba.wrapper tag: 'div', class: 'input-group col-sm-12' do |append|
        append.use :input, class: 'form-control'
      end
      ba.use :error, wrap_with: { tag: 'span', class: 'help-block' }
      ba.use :hint,  wrap_with: { tag: 'p', class: 'help-block' }
    end
  end

  config.default_wrapper = :centric_basic
  config.wrapper_mappings = {
    check_boxes: :vertical_radio_and_checkboxes,
    radio_buttons: :centric_radio,
    file: :vertical_file_input,
    boolean: :centric_checkbox,
    datetime: :multi_select,
    date: :multi_select,
    time: :multi_select
  }
end
